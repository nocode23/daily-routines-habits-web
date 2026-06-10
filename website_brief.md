# Website Brief – Daily Routines & Habits

> **Účel tohoto dokumentu:** Kompletní zadání pro vytvoření webové stránky aplikace,
> včetně obsahu všech stránek, vizuálního směru, App Store metadat a právních požadavků.
> Tento brief je určen jako přímé zadání pro Claude Code nebo jiného vývojáře.

---

## 1. O aplikaci

| Položka | Hodnota |
|---------|---------|
| **Marketingový název** | Daily Routines & Habits |
| **Bundle název** | Again |
| **Bundle ID** | nocode23.com.Again |
| **Vývojář / organizace** | Petr Primus / nocode23.com |
| **Kontaktní email** | support@nocode23.com |
| **Platforma** | iOS 26.5+, iPhone + iPad |
| **Jazyky** | Čeština, Angličtina |
| **Cena** | Zdarma |
| **Kategorie** | Health & Fitness (primární), Productivity (sekundární) |
| **Věkové hodnocení** | 4+ |
| **Dostupnost** | Globální |

---

## 2. Struktura webu

Web se skládá ze **tří stránek**:

```
/               → Landing page (hlavní)
/privacy        → Zásady ochrany osobních údajů (Privacy Policy)
/support        → Podpora a FAQ
```

Volitelné aliasy:
- `/privacy-policy` → redirect na `/privacy`
- `/help` → redirect na `/support`

---

## 3. Vizuální identita

### Styl a tón
- **Čistý, moderní iOS design** — inspirovaný Apple HIG 2025/2026
- **Liquid Glass estetika** — jemné skleněné karty, blur efekty, měkké stíny
- Tón komunikace: přátelský, motivující, stručný. Žádné buzzwordy.

### Barvy
```css
/* Primární accent */
--blue:   #007AFF;   /* iOS system blue */

/* Oblast barvy (accent palette — odpovídá přednastaveným oblastem v aplikaci) */
--green:  #34C759;
--purple: #AF52DE;
--orange: #FF9500;
--pink:   #FF2D55;
--indigo: #5856D6;
--mint:   #00C7BE;
--red:    #FF3B30;   /* preset v editoru oblastí */
--teal:   #30B0C7;   /* preset v editoru oblastí */

/* Neutrální */
--bg-light:  #F2F2F7;   /* iOS grouped background */
--bg-dark:   #000000;
--card-light: #FFFFFF;
--card-dark:  #1C1C1E;
--text-primary-light:   #090909;
--text-secondary-light: #8E8E93;
--text-primary-dark:    #FFFFFF;
--text-secondary-dark:  #8E8E93;
```

### Typografie
- Nadpisy: **SF Pro Display** (nebo systémový font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif`)
- Tělo: **SF Pro Text** (nebo systémový stack)
- Alternativa Google Fonts: **Inter** (velmi blízký SF Pro)

### Dark mode
Web musí podporovat dark mode přes `prefers-color-scheme: dark`.

### Screenshoty
Screenshoty jsou k dispozici v adresáři `apple_connect/screenshots/`:
- `01_dashboard.png` / `01_dashboard_dark.png`
- `02_stats_overview.png` / `02_stats_overview_dark.png`
- `03_stats_heatmap.png` / `03_stats_heatmap_dark.png`
- `04_add_routine.png` / `04_add_routine_dark.png`

Formát: 1320×2868 px PNG. Na webu je zobrazuj jako mockupy telefonu (iPhone frame overlay) nebo jako čisté screenshoty v zaoblené rámu.

---

## 4. Landing page — obsah (`/`)

### 4.1 Hero sekce

**Nadpis:** Daily Routines & Habits
**Podnadpis:** Build better habits, one day at a time.
**Perex:**
> Track your daily routines, check off completed habits, and see your progress with beautiful stats. Organized by areas of life — Fitness, Nutrition, Work, Mind and more.

**CTA tlačítko:** Download on the App Store
→ odkaz na App Store (placeholder: `https://apps.apple.com/app/idXXXXXXXXX`)
→ použít officiální Apple badge: `https://developer.apple.com/app-store/marketing/guidelines/`

**Hero vizuál:** Screenshot `01_dashboard.png` v iPhone framu, mírný tilt nebo rovný.

---

### 4.2 Sekce funkcí (Features)

Zobrazit jako 2–3 sloupcový grid karet nebo jako alternující řádky (text vlevo + screenshot vpravo).

#### Feature 1 — Přehled na jeden pohled
**Nadpis:** Your day at a glance
**Popis:**
All your routines grouped by area of life. See exactly what's done, what's left, and how far you've come today. Tap an area header to collapse it and keep the view tidy — sections open up again whenever you switch days.
**Screenshot:** `01_dashboard.png`

#### Feature 2 — Tři stavy rutin
**Nadpis:** Three meaningful states
**Popis:**
Every routine is clearly either **incomplete**, **completed** (gently dimmed), or **archived** (greyed out with an archive icon). No confusion about what needs your attention.
**Vizuál:** Detail screenshotu dashboardu zobrazující všechny tři stavy

#### Feature 3 — 30denní statistiky
**Nadpis:** 30 days of progress
**Popis:**
Track your completion rate, current and longest streaks, and see your habits visualized on a GitHub-style heatmap. Spot patterns. Stay consistent.
**Screenshot:** `03_stats_heatmap.png`

#### Feature 4 — Flexibilní plánování
**Nadpis:** Routines that fit your life
**Popis:**
Set routines for every day or specific days of the week. Choose morning, afternoon, evening — or repeat throughout the day. Set a goal count (e.g. 8 glasses of water) or just track completion.
**Screenshot:** `04_add_routine.png`

#### Feature 5 — Připomínky
**Nadpis:** Reminders that actually help
**Popis:**
Set notifications at specific times or automatically every N hours. The app respects your iOS notification budget and shows you exactly when reminders are scheduled.

#### Feature 6 — Widget
**Nadpis:** Check off from your Home Screen
**Popis:**
Add a widget in small, medium, or large size — or on your Lock Screen. Tap to toggle a routine without even opening the app. Always shows today's progress and starts fresh every morning. The widget follows the language you choose in the app.

---

### 4.3 Sekce screenshotů (Screenshot gallery)

Horizontální scrollovatelná galerie nebo 2×2 grid zobrazující:
1. `01_dashboard.png` — Dashboard
2. `02_stats_overview.png` — Stats Overview
3. `03_stats_heatmap.png` — Heatmap
4. `04_add_routine.png` — Add Routine

Popisky pod každým: "Daily overview", "Completion stats", "30-day heatmap", "Easy setup"

Automaticky přepínat mezi light/dark variantou podle `prefers-color-scheme`.

---

### 4.4 Sekce „Jak to funguje" (How it works)

Číslovaný seznam 3–4 kroků:

1. **Add your routines** — Create routines and assign them to areas of life. Set when you want to do them and how often.
2. **Check them off daily** — Open the app each day and mark routines as complete. Swipe to edit, archive, or delete.
3. **Watch your streaks grow** — The app tracks your consistency over 30 days with streaks, averages, and a visual heatmap.
4. **Never miss a beat** — Set reminders and add a widget to stay on track without extra effort.

---

### 4.5 Sekce oblastí (Areas of life)

Vizualizace přednastavených oblastí jako barevné ikony/čipy (odpovídá `SeedData`):

| Oblast | Ikona | Barva |
|--------|-------|-------|
| Fitness | figure.run | Modrá #007AFF |
| Nutrition | fork.knife | Zelená #34C759 |
| Work | briefcase.fill | Oranžová #FF9500 |
| Hygiene | sparkles | Fialová #AF52DE |
| Mind | brain.head.profile | Růžová #FF2D55 |
| Sleep | moon.fill | Indigo #5856D6 |
| Supplements | pills.fill | Mint #00C7BE |

Text: *Start with 7 built-in areas or create your own. Customize the icon and color to make it yours.*

---

### 4.6 Footer

Obsah footeru:
```
© 2026 nocode23.com  ·  Daily Routines & Habits
Privacy Policy  |  Support  |  support@nocode23.com
```

Footer musí obsahovat odkaz na `/privacy` a `/support`.

---

## 5. Privacy Policy (`/privacy`)

> **Právní požadavek:** Apple vyžaduje funkční URL na Privacy Policy před odesláním
> aplikace do App Store. Stránka musí být veřejně přístupná bez přihlášení.

**Datum platnosti:** 10. června 2026
**Aplikuje se na:** Daily Routines & Habits (iOS aplikace), tato webová stránka

---

### Plný text Privacy Policy

```
Privacy Policy — Daily Routines & Habits

Last updated: June 10, 2026

This Privacy Policy explains how Daily Routines & Habits ("the App", "we", "us")
handles your information. We are committed to protecting your privacy.

---

1. Data We Collect

We do not collect, store, or transmit any personal data to external servers.

All data you enter in the App — routines, areas, completion logs, and settings —
is stored exclusively on your device using Apple's SwiftData framework.
If you have device backups enabled (iCloud or computer backups), your data is
included in those backups, which are governed by Apple's Privacy Policy.

2. Data Stored on Your Device

The App stores the following data locally on your device:
- Routine names, areas, and configurations you create
- Daily completion logs
- App settings (theme, language, notification preferences)

This data never leaves your device unless you use Apple's iCloud backup,
which is governed by Apple's own Privacy Policy.

3. Notifications

If you enable reminders, the App requests permission to send local
notifications. Notifications are generated and delivered entirely on-device.
No notification content is transmitted to any server.

4. Widget Data

The Home Screen widget communicates with the App via a shared App Group
container stored locally on your device (group.nocode23.com.Again).
No data is sent externally.

5. Analytics and Tracking

The App does not use any analytics SDKs, tracking frameworks, advertising
networks, or third-party services. We do not track you across apps or websites.

6. UserDefaults

The App uses Apple's UserDefaults API to store app settings and widget
communication data locally on your device. This is declared in our
PrivacyInfo.xcprivacy manifest (reason code CA92.1: app settings storage).

7. Children's Privacy

The App is rated 4+ and does not knowingly collect data from children or
any other users, as no data is collected at all.

8. Data Retention and Deletion

All your data is stored on your device. You can delete all data at any time
using the "Reset All Data" option in the App's Settings, or by uninstalling
the App. We have no copies of your data.

9. Third-Party Services

The App does not integrate any third-party SDKs, services, APIs, or
analytics tools. The only external interaction is with Apple's systems
(iCloud backup, push notification delivery) which are governed by
Apple's Privacy Policy: https://www.apple.com/legal/privacy/

10. Changes to This Policy

If we make material changes to this Privacy Policy, we will update the
"Last updated" date above. Continued use of the App constitutes acceptance
of the updated policy.

11. Contact

If you have questions about this Privacy Policy, contact us at:
support@nocode23.com

Developer: Petr Primus
Organization: nocode23.com
```

---

## 6. Support stránka (`/support`)

### Nadpis
Help & Support — Daily Routines & Habits

### FAQ sekce

**Q: How do I add a new routine?**
A: Tap the **+** button in the top right of the Overview tab. Give your routine a name, choose an area, set a time of day and frequency, then tap Save.

**Q: What's the difference between archiving and deleting?**
A: Archiving hides a routine from your daily view starting from the next day — it stops showing up, but your past completion data is preserved in Statistics. You can restore an archived routine anytime in Settings → Archived routines. Deleting permanently removes the routine and all its history.

**Q: Can I collapse an area section?**
A: Yes — tap the section header to collapse or expand it. Sections automatically expand again when you switch to a different day, so nothing stays hidden by accident.

**Q: Can I use the app in English and Czech?**
A: Yes. The app follows your iOS language setting. You can also manually override the language in Settings → Language — the Home Screen widget follows the same choice.

**Q: How do I add the widget to my Home Screen?**
A: Long-press your Home Screen, tap the **+** button, search for "Daily Routines", and choose a widget size (small, medium, large, or lock screen).

**Q: Does the app sync between devices?**
A: The app currently stores data locally on your device. If you have iCloud backup enabled, your data is included in your device backup, but real-time cross-device sync is not yet supported.

**Q: Why are my routines not showing on a future date?**
A: The Overview only shows active routines scheduled for that day. Archived routines are hidden from future dates. Routines set to specific days only appear on those days.

**Q: I accidentally deleted all my data. Can I recover it?**
A: If you have an iCloud or iTunes backup from before the deletion, you can restore your device from that backup. The app itself does not have a cloud backup of its own.

### Kontakt sekce

**Still need help?**
Email us at **support@nocode23.com** — we typically respond within 1–2 business days.

---

## 7. App Store metadata

> Tato sekce slouží pro vyplnění v App Store Connect.
> Není součástí webu, ale je součástí tohoto briefu pro přehlednost.

### Název aplikace (30 znaků)
```
Daily Routines & Habits
```

### Podtitulek / Subtitle (30 znaků)
```
Build habits. Track progress.
```

### Klíčová slova / Keywords (100 znaků)
```
habits,routine,tracker,daily,fitness,productivity,streak,goals,health,reminder,widget,planner
```
*(zkontroluj délku — max 100 znaků bez mezer)*

### Popis / Description (4000 znaků)
```
Build better habits, one day at a time.

Daily Routines & Habits helps you track your daily routines and stay consistent
— whether it's morning workouts, hydration goals, reading, meditation, or work
habits.

ORGANIZE BY AREA OF LIFE
Group your routines into 7 built-in areas — Fitness, Nutrition, Work, Hygiene,
Mind, Sleep and Supplements — or create your own with custom icons and colors.
Keep everything structured and easy to navigate.

THREE VISUAL STATES
Every routine is clearly incomplete, completed (gently dimmed), or archived
(greyed out). No confusion about what still needs your attention today.

FLEXIBLE SCHEDULING
• Once daily, multiple times a day, or on specific days of the week
• Choose morning, afternoon, or evening — or repeat throughout the whole day
• Set a target count (e.g. 8 glasses of water) or just track completion

POWERFUL STATISTICS
• 30-day completion rate per routine
• Current and longest streaks
• GitHub-style heatmap calendar
• Best day of the week
• Area-by-area breakdown
• Trend charts

CLEAN, FOCUSED VIEW
Collapse any area section with a tap to keep your day tidy. Sections expand
again when you switch to a new day, so nothing gets lost.

REMINDERS THAT WORK
Set notifications at specific times or automatically every N hours. The app
stays within iOS limits and shows you exactly when each reminder is scheduled.

HOME SCREEN WIDGET
Add a widget in small, medium, or large size. Check off routines directly from
your Home Screen or Lock Screen — without opening the app.

DESIGNED FOR iOS
Built with SwiftUI for iPhone and iPad. Supports Dark Mode and English and
Czech (follows the system or your in-app choice). Clean, distraction-free
interface.

COMPLETELY PRIVATE
All your data stays on your device. No accounts. No subscriptions. No tracking.
No ads. No data ever sent to a server.

Download free and start building habits that stick.
```

### URL adresy (vyplnit před odesláním)
| Pole | URL |
|------|-----|
| Marketing URL | `https://nocode23.com/again` *(nebo jiná doména)* |
| Support URL | `https://nocode23.com/again/support` |
| Privacy Policy URL | `https://nocode23.com/again/privacy` |

### Kategorie
- Primární: **Health & Fitness**
- Sekundární: **Productivity**

### Věkové hodnocení
- **4+** — žádný nevhodný obsah

---

## 8. Právní a compliance checklist

### 8.1 Před odesláním do App Store

- [ ] **Privacy Policy URL** je veřejně přístupná (bez přihlášení, bez paywallu)
- [ ] **Support URL** je funkční a obsahuje kontaktní email
- [ ] **App Privacy (Nutrition Labels)** v App Store Connect:
  - Data Not Collected → zatrhnout (aplikace neshromažďuje žádná data)
  - Tracking → Not tracked
- [ ] **Age Rating questionnaire** dokončen (výsledek: 4+)
- [ ] **Export compliance**: aplikace nepoužívá šifrování nad rámec systémových API → odpověď "No" na export compliance
- [ ] **PrivacyInfo.xcprivacy** je přítomen v bundle (✅ již existuje)
- [ ] **Podpis aplikace** (code signing) je nastaven na Distribution certificate

### 8.2 Právní obsah webu

Webová stránka musí obsahovat:
- [ ] **Copyright notice** v patičce: `© 2026 nocode23.com`
- [ ] **Odkaz na Privacy Policy** v patičce na každé stránce
- [ ] **Privacy Policy** je datována a obsahuje "Last updated" datum
- [ ] **Kontaktní email** je viditelný (App Store Review to kontroluje)

### 8.3 GDPR (pro návštěvníky z EU)

Pokud web **nepoužívá cookies, analytics ani tracking**, není nutný cookie banner.
Pokud přidáš Google Analytics nebo podobné → nutný cookie consent banner (GDPR čl. 6/7).

**Doporučení:** Nepoužívat žádné external analytics na webu (konzistentní s přístupem v aplikaci). Případně použít privacy-first analytiku jako **Plausible** nebo **Fathom** (nevyžadují cookie consent v EU).

### 8.4 Apple-specifické požadavky

- **Apple badge pravidla**: Použít oficiální "Download on the App Store" badge. Nestylizovat jinak. Zdroj: [Apple Marketing Guidelines](https://developer.apple.com/app-store/marketing/guidelines/)
- **Screenshoty**: Screenshoty na webu mohou být upravené mockupy (přidán iPhone frame). Screenshoty v App Store Connect musí být neupraveného obsahu aplikace.
- **Trademark**: "App Store" je ochranná známka Apple. Psát s velkými písmeny.

### 8.5 Doména a hosting

Doporučení pro hosting Privacy Policy a Support stránek:
- **GitHub Pages** (zdarma, spolehlivé, HTTPS)
- **Netlify** (zdarma tier, HTTPS, custom domain)
- **Vercel** (zdarma tier, HTTPS)

URL musí používat **HTTPS** — App Store Connect odmítá HTTP adresy.

---

## 9. Technické požadavky webu

### Stack doporučení
- **Statický web** (HTML/CSS/JS) nebo **Next.js** / **Astro** — není potřeba backend
- Žádná databáze, žádné uživatelské účty
- HTTPS povinné

### Výkon
- Lighthouse score ≥ 90 (Performance, Accessibility, SEO)
- Obrázky ve formátu WebP nebo AVIF s fallback PNG
- Lazy loading screenshotů

### SEO meta tagy (příklad pro `index.html`)
```html
<title>Daily Routines & Habits — Build better habits, one day at a time</title>
<meta name="description" content="Track your daily routines and stay consistent.
Organize by areas of life, see 30-day stats, and check off habits from your
Home Screen widget. Free for iPhone and iPad.">
<meta property="og:title" content="Daily Routines & Habits">
<meta property="og:description" content="Build better habits, one day at a time.">
<meta property="og:image" content="/screenshots/01_dashboard.png">
<meta name="apple-itunes-app" content="app-id=XXXXXXXXX">
```

### Responsive
- Mobile-first
- Breakpointy: 375px (iPhone SE), 430px (iPhone 16 Pro Max), 768px (iPad), 1024px (desktop)

---

## 10. Obsah webu — česká verze (alternativní texty)

Pokud chceš web i v češtině (nebo přepínač jazyků):

| EN | CS |
|----|----|
| Daily Routines & Habits | Denní rutiny & Návyky |
| Build better habits, one day at a time. | Buduj lepší návyky, den za dnem. |
| Download on the App Store | Stáhnout z App Storu |
| Your day at a glance | Přehled dne na první pohled |
| 30 days of progress | 30 dní pokroku |
| Routines that fit your life | Rutiny přizpůsobené tvému životu |
| Check off from your Home Screen | Odškrtávej z plochy |
| All your data stays on your device. | Všechna tvá data zůstávají v telefonu. |

---

## 11. Soubory a assety připravené k použití

```
apple_connect/
  screenshots/
    01_dashboard.png          (1320×2868 px)
    01_dashboard_dark.png     (1320×2868 px)
    02_stats_overview.png     (1320×2868 px)
    02_stats_overview_dark.png
    03_stats_heatmap.png      (1320×2868 px)
    03_stats_heatmap_dark.png
    04_add_routine.png        (1320×2868 px)
    04_add_routine_dark.png
  generate_screenshots.swift  (pro přegenerování screenshotů)
  website_brief.md            (tento dokument)
```

Ikona aplikace (1024×1024 px PNG) je potřeba dodat zvlášť z Xcode assets.

---

*Dokument vytvořen 8. června 2026, aktualizován 10. června 2026 (sladěno s auditem aplikace: 7 oblastí a jejich skutečné barvy, ztlumené barvy místo strikethrough u splněných rutin, ruční collapse sekcí s auto-expand při změně dne, jazyk widgetu dle in-app volby, zpřesněná formulace o zálohách v Privacy Policy). Před odesláním do App Store ověř aktuálnost všech URL adres a dat.*
