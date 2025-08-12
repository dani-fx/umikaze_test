# Sakura BTC - Navodila za objavo

## 🚀 Možnost 1: Netlify (najlažje)
1. Pojdite na https://netlify.com
2. "New site from Git" ali drag&drop ZIP
3. Build command: `bun run build`
4. Publish directory: `.next`
5. Dodajte domeno: sakurabtc.si

## 🔥 Možnost 2: Vercel (priporočeno za Next.js)
1. Pojdite na https://vercel.com
2. "Import Git Repository"
3. Avtomatska detekcija Next.js
4. Deploy v 1 kliku!

## 💻 Možnost 3: Lastni server
### Zahteve:
- Node.js 18+
- PM2 (za produkcijo)

### Namestitev:
```bash
# 1. Naložite kodo na server
scp -r sakura-bistro/ user@your-server.com:/var/www/

# 2. Na strežniku
cd /var/www/sakura-bistro
npm install
npm run build

# 3. Zženite aplikacijo
npm start
# ALI z PM2 za produkcijo:
pm2 start "npm start" --name sakura-btc
```

### Nginx konfiguracija:
```nginx
server {
    listen 80;
    server_name sakurabtc.si;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📁 Možnost 4: Statična različica
```bash
# Za enostavno spletno gostovanje
npm run build
npm run export
# Naložite 'out' mapo na server
```

## 🌍 Možnost 5: GitHub Pages
1. Push kodo v GitHub repozitorij
2. Settings → Pages
3. Build iz main/master branch
4. Brezplačna .github.io domena

## 💡 Priporočila:
- **Začetniki**: Netlify ali Vercel
- **Profesionalno**: Lastni server z domeno
- **Brezplačno**: GitHub Pages
- **Najboljše zmogljivosti**: Vercel
