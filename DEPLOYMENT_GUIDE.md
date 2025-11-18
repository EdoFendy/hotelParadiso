# Guida al Deployment - Hotel Paradiso delle Madonie

## Problema Immagini Non Caricate

### Causa Probabile
Le immagini nella cartella `/public/images/` non vengono caricate sulla VPS durante il deployment.

### Soluzione Completa

## 1. Connessione alla VPS

```bash
ssh root@5.39.29.54
```

## 2. Verifica Struttura Progetto sulla VPS

```bash
cd /root/hotelParadiso
ls -la
ls -la public/
ls -la public/images/
```

Se la cartella `public/images/` è vuota o non esiste, procedi con il passo 3.

## 3. Caricare le Immagini sulla VPS

### Opzione A: Da Locale a VPS (dal tuo Mac)

```bash
# Dalla cartella del progetto locale
cd /Users/edoardoatria/Downloads/hotelParadiso-main

# Carica tutte le immagini
scp -r public/images/* root@5.39.29.54:/root/hotelParadiso/public/images/

# Carica anche le icone
scp -r public/icon/* root@5.39.29.54:/root/hotelParadiso/public/icon/
```

### Opzione B: Clonare Tutto il Progetto da Git (se hai un repository)

```bash
# Sulla VPS
cd /root
rm -rf hotelParadiso  # Rimuovi la vecchia installazione
git clone [URL_DEL_TUO_REPOSITORY] hotelParadiso
cd hotelParadiso
```

## 4. Installazione e Build sulla VPS

```bash
# Sulla VPS, dentro /root/hotelParadiso

# Installa dipendenze
npm install

# Build di produzione
npm run build

# Verifica che le immagini siano presenti
ls -la public/images/
ls -la public/icon/
```

## 5. Configurazione PM2 (Process Manager)

```bash
# Installa PM2 globalmente (se non presente)
npm install -g pm2

# Stop dell'istanza precedente (se esiste)
pm2 stop hotelparadiso
pm2 delete hotelparadiso

# Start con PM2
pm2 start npm --name "hotelparadiso" -- start

# Salva configurazione PM2
pm2 save

# Configura PM2 per l'avvio automatico
pm2 startup
```

## 6. Configurazione Nginx (Reverse Proxy)

Crea/Aggiorna il file di configurazione Nginx:

```bash
nano /etc/nginx/sites-available/hotelparadiso
```

Inserisci questa configurazione:

```nginx
server {
    listen 80;
    server_name paradisodellemadonie.it www.paradisodellemadonie.it;

    # Redirect www to non-www
    if ($host = www.paradisodellemadonie.it) {
        return 301 https://paradisodellemadonie.it$request_uri;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache statico per immagini
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp|avif)$ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Abilita il sito:

```bash
ln -s /etc/nginx/sites-available/hotelparadiso /etc/nginx/sites-enabled/
nginx -t  # Test configurazione
systemctl reload nginx
```

## 7. Configurazione SSL con Certbot (HTTPS)

```bash
# Installa Certbot (se non presente)
apt update
apt install certbot python3-certbot-nginx -y

# Ottieni certificato SSL
certbot --nginx -d paradisodellemadonie.it -d www.paradisodellemadonie.it

# Rinnovo automatico è già configurato da certbot
```

## 8. Verifica Permessi File

```bash
# Sulla VPS
cd /root/hotelParadiso

# Imposta permessi corretti
chmod -R 755 public/
chmod -R 644 public/images/*
chmod -R 644 public/icon/*
```

## 9. Variabili d'Ambiente

Crea il file `.env.production` sulla VPS:

```bash
nano /root/hotelParadiso/.env.production
```

Aggiungi:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://paradisodellemadonie.it
```

## 10. Restart Completo

```bash
# Rebuild e restart
cd /root/hotelParadiso
npm run build
pm2 restart hotelparadiso

# Verifica status
pm2 status
pm2 logs hotelparadiso --lines 50
```

## 11. Test Finale

Apri il browser e verifica:

1. ✅ Sito caricato: https://paradisodellemadonie.it
2. ✅ Immagini visibili (apri DevTools → Network → IMG)
3. ✅ Favicon visibile
4. ✅ Cookie banner funzionante
5. ✅ Pagine legali accessibili:
   - `/privacy`
   - `/cookie-policy`
   - `/termini`

## Troubleshooting Immagini

### Se le immagini ancora non si caricano:

```bash
# Verifica percorsi immagini
ls -la /root/hotelParadiso/public/images/
ls -la /root/hotelParadiso/.next/static/

# Verifica che Next.js stia ascoltando
curl http://localhost:3000
curl http://localhost:3000/images/logo.png

# Verifica logs PM2
pm2 logs hotelparadiso

# Verifica logs Nginx
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

### Verifica Image Optimization

Nel file `next.config.mjs` assicurati che sia configurato:

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  unoptimized: false,  // Lascia false per ottimizzazione
}
```

Se continui ad avere problemi, temporaneamente disabilita l'ottimizzazione:

```javascript
images: {
  unoptimized: true,  // Disabilita ottimizzazione temporaneamente
}
```

Poi rebuild:

```bash
npm run build
pm2 restart hotelparadiso
```

## Comandi Utili

```bash
# Verifica status servizi
pm2 status
systemctl status nginx

# Restart tutto
pm2 restart hotelparadiso
systemctl restart nginx

# Logs real-time
pm2 logs hotelparadiso --lines 100

# Monitor risorse
pm2 monit

# Deploy aggiornamenti
cd /root/hotelParadiso
git pull  # Se usi Git
npm install
npm run build
pm2 restart hotelparadiso
```

## Backup Automatico

Configura un backup giornaliero:

```bash
# Crea script backup
nano /root/backup-hotel.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/root/backups/hotelparadiso"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/hotel_$DATE.tar.gz /root/hotelParadiso

# Mantieni solo ultimi 7 backup
find $BACKUP_DIR -name "hotel_*.tar.gz" -mtime +7 -delete
```

```bash
chmod +x /root/backup-hotel.sh

# Aggiungi a crontab (backup giornaliero alle 3 AM)
crontab -e
# Aggiungi: 0 3 * * * /root/backup-hotel.sh
```

---

## Checklist Deployment ✅

- [ ] Codice aggiornato sulla VPS
- [ ] Immagini caricate in `public/images/`
- [ ] Icone caricate in `public/icon/`
- [ ] `npm install` eseguito
- [ ] `npm run build` completato senza errori
- [ ] PM2 configurato e running
- [ ] Nginx configurato con proxy
- [ ] SSL attivo (HTTPS)
- [ ] Permessi file corretti (755/644)
- [ ] Variabili d'ambiente configurate
- [ ] Test immagini OK
- [ ] Cookie banner funzionante
- [ ] Sitemap accessibile (`/sitemap.xml`)
- [ ] Robots.txt accessibile (`/robots.txt`)

---

**Ultimo aggiornamento**: 12 Novembre 2025
**Versione**: 1.0.0
