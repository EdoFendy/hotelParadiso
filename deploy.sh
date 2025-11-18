#!/bin/bash

# Script di Deployment Automatico per Hotel Paradiso delle Madonie
# Usage: ./deploy.sh

set -e  # Exit on error

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

VPS_HOST="root@5.39.29.54"
VPS_DIR="/root/hotelParadiso"
LOCAL_DIR="/Users/edoardoatria/Downloads/hotelParadiso-main"

echo -e "${GREEN}🚀 Hotel Paradiso - Deployment Script${NC}"
echo "=========================================="

# Step 1: Build locale
echo -e "\n${YELLOW}📦 Step 1: Building locally...${NC}"
cd "$LOCAL_DIR"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Local build successful${NC}"
else
    echo -e "${RED}✗ Local build failed${NC}"
    exit 1
fi

# Step 2: Sync files to VPS
echo -e "\n${YELLOW}📤 Step 2: Uploading files to VPS...${NC}"

# Sync tutto il progetto escludendo node_modules e .next
rsync -avz --progress \
    --exclude 'node_modules' \
    --exclude '.next' \
    --exclude '.git' \
    --exclude '*.log' \
    --exclude '.DS_Store' \
    "$LOCAL_DIR/" "$VPS_HOST:$VPS_DIR/"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Files uploaded${NC}"
else
    echo -e "${RED}✗ Upload failed${NC}"
    exit 1
fi

# Step 3: Verify images
echo -e "\n${YELLOW}🖼️  Step 3: Verifying images...${NC}"
ssh $VPS_HOST "ls -la $VPS_DIR/public/images/ | wc -l"
ssh $VPS_HOST "ls -la $VPS_DIR/public/icon/ | wc -l"

# Step 4: Install dependencies on VPS
echo -e "\n${YELLOW}📥 Step 4: Installing dependencies on VPS...${NC}"
ssh $VPS_HOST "cd $VPS_DIR && npm install --production"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${RED}✗ Dependency installation failed${NC}"
    exit 1
fi

# Step 5: Build on VPS
echo -e "\n${YELLOW}🔨 Step 5: Building on VPS...${NC}"
ssh $VPS_HOST "cd $VPS_DIR && npm run build"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ VPS build successful${NC}"
else
    echo -e "${RED}✗ VPS build failed${NC}"
    exit 1
fi

# Step 6: Set correct permissions
echo -e "\n${YELLOW}🔐 Step 6: Setting permissions...${NC}"
ssh $VPS_HOST "cd $VPS_DIR && chmod -R 755 public/ && chmod -R 644 public/images/* && chmod -R 644 public/icon/*"

# Step 7: Restart PM2
echo -e "\n${YELLOW}🔄 Step 7: Restarting application...${NC}"
ssh $VPS_HOST "pm2 restart hotelparadiso || pm2 start npm --name hotelparadiso -- start"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Application restarted${NC}"
else
    echo -e "${RED}✗ Restart failed${NC}"
    exit 1
fi

# Step 8: Save PM2 configuration
ssh $VPS_HOST "pm2 save"

# Step 9: Check status
echo -e "\n${YELLOW}📊 Step 9: Checking status...${NC}"
ssh $VPS_HOST "pm2 status"

# Step 10: Test application
echo -e "\n${YELLOW}🧪 Step 10: Testing application...${NC}"
RESPONSE=$(ssh $VPS_HOST "curl -s -o /dev/null -w '%{http_code}' http://localhost:3000")

if [ "$RESPONSE" = "200" ]; then
    echo -e "${GREEN}✓ Application is responding (HTTP $RESPONSE)${NC}"
else
    echo -e "${RED}✗ Application not responding correctly (HTTP $RESPONSE)${NC}"
fi

# Step 11: Show recent logs
echo -e "\n${YELLOW}📋 Step 11: Recent logs:${NC}"
ssh $VPS_HOST "pm2 logs hotelparadiso --lines 20 --nostream"

echo -e "\n${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "🌐 Visit: ${GREEN}https://paradisodellemadonie.it${NC}"
echo -e "\n${YELLOW}To monitor logs:${NC} ssh $VPS_HOST 'pm2 logs hotelparadiso'"
echo -e "${YELLOW}To check status:${NC} ssh $VPS_HOST 'pm2 status'"
