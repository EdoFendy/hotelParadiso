#!/bin/bash

# Script per caricare solo le immagini sulla VPS
# Usage: ./upload-images.sh

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

VPS_HOST="root@5.39.29.54"
VPS_DIR="/root/hotelParadiso"
LOCAL_DIR="/Users/edoardoatria/Downloads/hotelParadiso-main"

echo -e "${GREEN}🖼️  Uploading Images to VPS${NC}"
echo "================================="

# Upload images
echo -e "\n${YELLOW}📤 Uploading public/images/...${NC}"
rsync -avz --progress "$LOCAL_DIR/public/images/" "$VPS_HOST:$VPS_DIR/public/images/"

# Upload icons
echo -e "\n${YELLOW}📤 Uploading public/icon/...${NC}"
rsync -avz --progress "$LOCAL_DIR/public/icon/" "$VPS_HOST:$VPS_DIR/public/icon/"

# Set permissions
echo -e "\n${YELLOW}🔐 Setting permissions...${NC}"
ssh $VPS_HOST "chmod -R 755 $VPS_DIR/public/ && chmod -R 644 $VPS_DIR/public/images/* && chmod -R 644 $VPS_DIR/public/icon/*"

# Verify
echo -e "\n${YELLOW}✓ Verifying upload...${NC}"
echo -e "${GREEN}Images:${NC}"
ssh $VPS_HOST "ls -lh $VPS_DIR/public/images/"
echo -e "\n${GREEN}Icons:${NC}"
ssh $VPS_HOST "ls -lh $VPS_DIR/public/icon/"

# Restart app
echo -e "\n${YELLOW}🔄 Restarting application...${NC}"
ssh $VPS_HOST "pm2 restart hotelparadiso"

echo -e "\n${GREEN}✅ Images uploaded successfully!${NC}"
