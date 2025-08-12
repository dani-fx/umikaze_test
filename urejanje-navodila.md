# 📝 Kako urejati vsebino spletne strani Sakura BTC

## 🎯 ENOSTAVNO UREJANJE - KONTAKT PODATKI

### Za spremembo telefona, emaila, naslova:

1. **Odprite datoteko** `index.html` v urejevalcu besedila
2. **Poiščite te vrstice** (Ctrl+F):

```html
<!-- TELEFON -->
<p>📞 +386 1 234 5678</p>

<!-- EMAIL -->
<p>📧 info@sakurabtc.si</p>

<!-- NASLOV -->
<p>📍 Ljubljana, Slovenija</p>

<!-- DELOVNI ČAS -->
<p>Pon-Ned: 11:00 - 22:00</p>
```

3. **Spremenite** številke/besedila med `>` in `<`
4. **Shranite** datoteko
5. **Naložite** na Netlify

---

## 💰 SPREMINJANJE CEN IN JEDI

### V datoteki `menu/index.html`:

**Poiščite strukturo:**
```html
<div class="text-red-400 font-bold text-lg">
  €3.50  <!-- ← CENA -->
</div>
```

**Za ime jedi:**
```html
<h3 class="text-white text-lg">Salmon Nigiri</h3>  <!-- ← IME JEDI -->
```

**Za opis jedi:**
```html
<p class="text-zinc-400 text-sm mt-1">
  Fresh Norwegian salmon over seasoned sushi rice  <!-- ← OPIS -->
</p>
```

---

## 🕐 SPREMINJANJE DELOVNEGA ČASA

### V datoteki `reservations/index.html`:

**Poiščite:**
```html
<div class="flex justify-between">
  <span>Ponedeljek - Četrtek</span>
  <span>11:00 - 22:00</span>  <!-- ← ČASI -->
</div>
```

---

## 📞 GLAVNI KONTAKT PODATKI - LOKACIJE:

### Telefon se pojavi v:
- `index.html` (glavna stran)
- `menu/index.html` (meni stran)
- `reservations/index.html` (rezervacije)

### Email se pojavi v:
- `index.html`
- `reservations/index.html`

---

## 🎨 DODAJANJE NOVIH JEDI

**PRIMER - nova jed:**

```html
<div class="bg-zinc-800/50 border-zinc-700 hover:border-red-500/50 transition-all duration-300 overflow-hidden">
  <div class="relative h-48 overflow-hidden">
    <img src="https://images.unsplash.com/photo-SLIKA_ID"
         alt="Ime jedi"
         class="w-full h-full object-cover">
  </div>

  <div class="p-4">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-white text-lg">IME NOVE JEDI</h3>
        <p class="text-zinc-400 text-sm mt-1">Opis nove jedi</p>
      </div>
      <div class="text-red-400 font-bold text-lg">€CENA</div>
    </div>

    <div class="text-center mt-3">
      <p class="text-zinc-400 text-sm mb-3">
        Za naročilo pokličite: <span class="text-red-400 font-medium">+386 1 234 5678</span>
      </p>
    </div>
  </div>
</div>
```

---

## ⚠️ POMEMBNO:

1. **Ohranite** HTML strukture (vključno z `<` `>`)
2. **Spreminjajte samo besedila** med oznakami
3. **Testirajte** lokalno pred objavo
4. **Naredite kopijo** pred spremembami

---

## 🆘 ČE SE ZATAKNE:

1. **Pošljite mi** datoteko z napako
2. **Opišite** kaj ste hoteli spremeniti
3. **Pomagam** v 5 minutah!

---

## 💡 PRIPOROČILO:

**Za večje spremembe** (novi meni, dizajn) - **kontaktirajte mene**
**Za manjše spremembe** (telefon, cene) - **uporabite ta navodila**
