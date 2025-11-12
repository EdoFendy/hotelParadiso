# 📚 SEO Implementation Examples - Come Usare le Utility

## Esempi Pratici per Creare Nuove Pagine SEO-Optimized

---

## 1. Creare una Pagina Attrazione (es. Castello Ventimiglia)

### File: `app/castello-ventimiglia/page.tsx`

```typescript
import { generatePageMetadata, generateBreadcrumbSchema, generateTouristAttractionSchema } from '@/lib/seo-utils'
import { generateCastelloVentimigliaSchema } from '@/lib/seo-schema'

// Metadata SEO
export const metadata = generatePageMetadata({
  title: 'Castello dei Ventimiglia Castelbuono | Storia, Orari, Biglietti 2025',
  description: 'Castello dei Ventimiglia (1316): visita il simbolo di Castelbuono. Cappella Serpotta, Museo Civico, orari, prezzi. A 2 minuti dall\'Hotel Paradiso delle Madonie.',
  keywords: 'castello ventimiglia, castelbuono castello, cappella serpotta, museo civico castelbuono',
  path: '/castello-ventimiglia',
  image: '/images/castello-ventimiglia.jpg',
  type: 'article',
})

export default function CastelloVentimigliaPage() {
  // Breadcrumb per navigazione
  const breadcrumbs = [
    { name: 'Castelbuono', path: '/castelbuono' },
    { name: 'Castello dei Ventimiglia', path: '/castello-ventimiglia' },
  ]

  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              generateCastelloVentimigliaSchema(),
              generateBreadcrumbSchema(breadcrumbs),
            ],
          }),
        }}
      />

      <main>
        {/* Breadcrumb visuale */}
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a> › <a href="/castelbuono">Castelbuono</a> › Castello dei Ventimiglia
        </nav>

        <h1>Castello dei Ventimiglia: Guida Completa 2025</h1>

        {/* Contenuto ottimizzato SEO - minimo 1.500 parole */}
        <article>
          <section>
            <h2>Storia del Castello (1316-2025)</h2>
            <p>Il Castello dei Ventimiglia fu costruito nel 1316 da Francesco I Ventimiglia...</p>
          </section>

          <section>
            <h2>Cosa Vedere: Cappella Serpotta</h2>
            <p>La Cappella Palatina di Sant'Anna è un capolavoro del Barocco siciliano...</p>
          </section>

          <section>
            <h2>Orari e Biglietti 2025</h2>
            <p>Orari di apertura: ...</p>
          </section>

          {/* FAQ ottimizzata per Featured Snippets */}
          <section>
            <h2>Domande Frequenti sul Castello</h2>
            <dl>
              <dt>Quanto costa il biglietto?</dt>
              <dd>Il biglietto intero costa €6, ridotto €4...</dd>

              <dt>Quanto tempo serve per la visita?</dt>
              <dd>La visita completa richiede circa 1h 30min...</dd>
            </dl>
          </section>

          {/* CTA Hotel */}
          <section>
            <h3>Dove Dormire Vicino al Castello</h3>
            <p>L'Hotel Paradiso delle Madonie dista solo 2 minuti a piedi dal Castello...</p>
            <a href="/#prenota">Prenota Ora la Tua Camera</a>
          </section>
        </article>
      </main>
    </>
  )
}
```

---

## 2. Creare una Pagina Evento (es. Ypsigrock Festival)

### File: `app/eventi/ypsigrock-festival/page.tsx`

```typescript
import { generatePageMetadata, generateEventSchema } from '@/lib/seo-utils'
import { generateYpsigrokEventSchema } from '@/lib/seo-schema'

export const metadata = generatePageMetadata({
  title: 'Ypsigrock Festival 2025 | Date, Line-up, Dove Dormire a Castelbuono',
  description: 'Ypsigrock Festival 7-10 agosto 2025 a Castelbuono. 28ª edizione del festival indie-rock internazionale. Prenota ora all\'Hotel Paradiso delle Madonie - camere in esaurimento!',
  keywords: 'ypsigrock festival 2025, ypsigrock castelbuono, dove dormire ypsigrock, hotel ypsigrock, festival indie rock sicilia',
  path: '/eventi/ypsigrock-festival',
  image: '/images/ypsigrock-2025.jpg',
  type: 'article',
})

export default function YpsigrokFestivalPage() {
  return (
    <>
      {/* Event Schema per Google Event Cards */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateYpsigrokEventSchema()),
        }}
      />

      <main>
        <h1>Ypsigrock Festival 2025: Guida Completa</h1>

        {/* Countdown timer */}
        <div className="countdown">
          🎸 Mancano XX giorni all'inizio del festival!
        </div>

        <section>
          <h2>Date Ypsigrock 2025</h2>
          <p><strong>7-10 agosto 2025</strong>, Piazza Castello, Castelbuono</p>
        </section>

        <section>
          <h2>Line-up Ypsigrock 2025</h2>
          <p>La line-up viene annunciata progressivamente da marzo 2025...</p>
          {/* Tabella artisti */}
        </section>

        <section>
          <h2>Come Arrivare a Ypsigrock</h2>
          <ul>
            <li>Da Palermo: 90 km, 1h 15min in auto</li>
            <li>Da Cefalù: 23 km, 25 minuti in auto</li>
          </ul>
        </section>

        {/* URGENCY + SCARCITY per conversioni */}
        <section className="booking-cta">
          <h2>🏨 Dove Dormire a Ypsigrock 2025</h2>
          <p><strong>⚠️ ATTENZIONE:</strong> Le camere a Castelbuono si esauriscono rapidamente durante Ypsigrock!</p>
          <div className="hotel-offer">
            <h3>Hotel Paradiso delle Madonie</h3>
            <ul>
              <li>✅ A 5 minuti a piedi da Piazza Castello</li>
              <li>✅ Colazione inclusa</li>
              <li>✅ Parcheggio privato gratuito</li>
              <li>✅ Cancellazione gratuita fino a 7 giorni prima</li>
            </ul>
            <p className="price">Da €150/notte durante il festival</p>
            <a href="/offerte-speciali/ypsigrock-festival-2025" className="cta-button">
              🎫 Prenota Ora - Solo 3 Camere Disponibili!
            </a>
          </div>
        </section>

        {/* FAQ ottimizzata */}
        <section>
          <h2>FAQ Ypsigrock Festival</h2>
          <dl>
            <dt>Quanto costano i biglietti Ypsigrock?</dt>
            <dd>Il pass 4 giorni costa circa €80-120, singole serate €25-35...</dd>

            <dt>C'è campeggio a Ypsigrock?</dt>
            <dd>Sì, è disponibile area campeggio gratuita...</dd>
          </dl>
        </section>
      </main>
    </>
  )
}
```

---

## 3. Creare una Pagina Itinerario/Guida

### File: `app/itinerari/weekend-3-giorni-madonie/page.tsx`

```typescript
import { generatePageMetadata, generateHowToSchema } from '@/lib/seo-utils'

export const metadata = generatePageMetadata({
  title: 'Weekend 3 Giorni alle Madonie: Itinerario Completo da Castelbuono',
  description: 'Itinerario perfetto 3 giorni Madonie: Castelbuono, Castello Ventimiglia, trekking Agrifogli Giganti, borghi UNESCO, Cefalù mare. Parti dall\'Hotel Paradiso!',
  keywords: 'weekend madonie, itinerario 3 giorni madonie, cosa fare madonie, castelbuono 3 giorni',
  path: '/itinerari/weekend-3-giorni-madonie',
  image: '/images/itinerario-madonie.jpg',
  type: 'article',
})

export default function ItinerarioWeekendPage() {
  // HowTo Schema per Featured Snippets
  const howToSteps = [
    {
      name: 'Giorno 1: Arrivo e Castelbuono',
      text: 'Arrivo in hotel, sistemazione, visita Castello Ventimiglia (2h), cena al ristorante Nangalarruni.',
      image: '/images/castelbuono-day1.jpg',
    },
    {
      name: 'Giorno 2: Trekking Madonie',
      text: 'Colazione, escursione Agrifogli Giganti (3h), pranzo in rifugio, pomeriggio Piano Battaglia, rientro hotel.',
      image: '/images/trekking-day2.jpg',
    },
    {
      name: 'Giorno 3: Borghi e Mare',
      text: 'Mattina Geraci Siculo e Gangi, pranzo tipico, pomeriggio spiaggia Cefalù, partenza.',
      image: '/images/borghi-day3.jpg',
    },
  ]

  const howToSchema = generateHowToSchema({
    name: 'Weekend 3 Giorni alle Madonie',
    description: 'Itinerario perfetto per un weekend di 3 giorni tra Castelbuono, Madonie e Cefalù',
    image: '/images/itinerario-madonie.jpg',
    totalTime: 'P3D', // ISO 8601 duration (3 days)
    steps: howToSteps,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <main>
        <h1>Weekend 3 Giorni alle Madonie: Itinerario Completo</h1>

        {/* Mappa interattiva */}
        <div className="map-embed">
          <iframe src="...Google Maps embed..." />
        </div>

        {/* Giorni dettagliati */}
        <section>
          <h2>🗓️ Giorno 1: Castelbuono e Castello</h2>
          <h3>Mattina</h3>
          <ul>
            <li><strong>10:00</strong> - Arrivo Hotel Paradiso, check-in</li>
            <li><strong>11:00</strong> - Passeggiata centro storico</li>
            <li><strong>12:30</strong> - Pranzo trattoria tipica</li>
          </ul>
          <h3>Pomeriggio</h3>
          <ul>
            <li><strong>15:00</strong> - Visita Castello Ventimiglia (2h)</li>
            <li><strong>17:00</strong> - Degustazione Manna</li>
            <li><strong>19:00</strong> - Aperitivo vista castello</li>
          </ul>
          {/* Foto gallery */}
        </section>

        <section>
          <h2>🥾 Giorno 2: Trekking Parco Madonie</h2>
          {/* Dettagli escursione */}
        </section>

        <section>
          <h2>🏰 Giorno 3: Borghi UNESCO e Cefalù</h2>
          {/* Dettagli borghi */}
        </section>

        {/* Budget estimato */}
        <section>
          <h2>💰 Budget Stimato</h2>
          <table>
            <tr><td>Hotel (2 notti)</td><td>€140-180</td></tr>
            <tr><td>Pasti</td><td>€120</td></tr>
            <tr><td>Ingressi</td><td>€20</td></tr>
            <tr><td><strong>TOTALE</strong></td><td><strong>€280-320/persona</strong></td></tr>
          </table>
        </section>

        {/* CTA prenotazione */}
        <section>
          <h2>Prenota il Tuo Weekend alle Madonie</h2>
          <a href="/offerte-speciali/weekend-romantico-madonie">
            Pacchetto Weekend 3 Giorni: €280 per coppia
          </a>
        </section>
      </main>
    </>
  )
}
```

---

## 4. Creare una Pagina Blog Post

### File: `app/blog/[slug]/page.tsx`

```typescript
import { generatePageMetadata, generateArticleSchema, calculateReadingTime } from '@/lib/seo-utils'

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug) // Fetch dal DB o CMS

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    path: `/blog/${params.slug}`,
    image: post.featuredImage,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author.name,
  })
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug)
  const readingTime = calculateReadingTime(post.content)

  // Article Schema
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: post.author.name,
    path: `/blog/${params.slug}`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article>
        {/* Breadcrumb */}
        <nav>
          <a href="/">Home</a> › <a href="/blog">Blog</a> › {post.title}
        </nav>

        {/* Header */}
        <header>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('it-IT')}
            </time>
            <span> · {readingTime}</span>
            <span> · Di {post.author.name}</span>
          </div>
        </header>

        {/* Featured Image con Alt ottimizzato */}
        <img
          src={post.featuredImage}
          alt={`${post.title} - Hotel Paradiso delle Madonie`}
          width={1200}
          height={630}
        />

        {/* Contenuto */}
        <div className="post-content">
          {post.content}
        </div>

        {/* Author Bio */}
        <aside className="author-bio">
          <h3>Sull'autore</h3>
          <p>{post.author.bio}</p>
        </aside>

        {/* Related Posts */}
        <section className="related-posts">
          <h2>Articoli Correlati</h2>
          {/* Link interni a post simili */}
        </section>

        {/* CTA */}
        <section className="post-cta">
          <h3>Pronto per la Tua Avventura alle Madonie?</h3>
          <a href="/#prenota">Prenota Ora il Tuo Soggiorno</a>
        </section>
      </article>
    </>
  )
}
```

---

## 5. Creare Pagina Offerta Speciale

### File: `app/offerte-speciali/weekend-romantico-madonie/page.tsx`

```typescript
import { generatePageMetadata, generateProductSchema } from '@/lib/seo-utils'

export const metadata = generatePageMetadata({
  title: 'Weekend Romantico Madonie: Offerta 2 Notti + Cena | €280 Coppia',
  description: '❤️ Weekend romantico a Castelbuono: 2 notti in camera Superior, cena tipica, bottiglia vino, colazioni. Vista Castello Ventimiglia. Prenota la tua fuga d\'amore!',
  keywords: 'weekend romantico madonie, soggiorno coppia castelbuono, offerta romantica sicilia',
  path: '/offerte-speciali/weekend-romantico-madonie',
  image: '/images/weekend-romantico.jpg',
  type: 'product',
})

export default function WeekendRomanticoPage() {
  // Product Schema per rich snippets con prezzo
  const productSchema = generateProductSchema({
    name: 'Weekend Romantico alle Madonie',
    description: '2 notti in camera Superior con vista, cena romantica, colazioni incluse, bottiglia di vino Siciliano',
    image: '/images/weekend-romantico.jpg',
    price: '280',
    currency: 'EUR',
    availability: 'InStock',
    url: '/offerte-speciali/weekend-romantico-madonie',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <main>
        {/* Hero section con FOMO */}
        <section className="hero">
          <h1>❤️ Weekend Romantico alle Madonie</h1>
          <p className="hero-subtitle">La fuga d'amore perfetta tra mare e montagna</p>
          <div className="urgency-banner">
            🔥 Solo 5 weekend disponibili a questo prezzo - Prenota Ora!
          </div>
        </section>

        {/* Cosa Include */}
        <section>
          <h2>Cosa Include il Pacchetto</h2>
          <div className="package-grid">
            <div className="package-item">
              <span className="icon">🛏️</span>
              <h3>2 Notti in Camera Superior</h3>
              <p>Camera romantica con vista panoramica sulle Madonie</p>
            </div>
            <div className="package-item">
              <span className="icon">🍝</span>
              <h3>Cena Romantica Tipica</h3>
              <p>Menu degustazione siciliano (4 portate) con candele</p>
            </div>
            <div className="package-item">
              <span className="icon">🍷</span>
              <h3>Bottiglia Vino Siciliano</h3>
              <p>Nero d'Avola DOC o Etna Rosso in camera</p>
            </div>
            <div className="package-item">
              <span className="icon">☕</span>
              <h3>2 Colazioni Continentali</h3>
              <p>Buffet con prodotti locali e dolci Fiasconaro</p>
            </div>
            <div className="package-item">
              <span className="icon">🗺️</span>
              <h3>Guida Turistica Personalizzata</h3>
              <p>Itinerario romantico Castelbuono + Borghi Madonie</p>
            </div>
            <div className="package-item">
              <span className="icon">🚗</span>
              <h3>Parcheggio Privato Gratuito</h3>
              <p>Comodo e sicuro</p>
            </div>
          </div>
        </section>

        {/* Prezzo con risparmio evidenziato */}
        <section className="pricing">
          <h2>Prezzo Speciale</h2>
          <div className="price-box">
            <p className="original-price">Prezzo normale: <del>€380</del></p>
            <p className="special-price">Offerta Weekend Romantico: <strong>€280</strong></p>
            <p className="savings">💰 Risparmi €100!</p>
            <p className="per-unit">Per coppia - Solo €140/persona</p>
          </div>
        </section>

        {/* Itinerario suggerito */}
        <section>
          <h2>Il Tuo Weekend Perfetto</h2>
          <div className="itinerary">
            <h3>Giorno 1 - Venerdì</h3>
            <ul>
              <li>15:00 - Check-in e brindisi di benvenuto</li>
              <li>17:00 - Passeggiata tramonto al Castello Ventimiglia</li>
              <li>20:00 - Cena romantica a lume di candela nel nostro ristorante</li>
            </ul>

            <h3>Giorno 2 - Sabato</h3>
            <ul>
              <li>09:00 - Colazione con vista</li>
              <li>10:30 - Visita borghi (Geraci Siculo, Gangi)</li>
              <li>13:00 - Pranzo trattoria tipica</li>
              <li>15:30 - Pomeriggio relax in hotel o escursione Madonie</li>
              <li>19:00 - Aperitivo in terrazza</li>
              <li>Sera - Cena libera (consigliamo Nangalarruni o Palazzaccio)</li>
            </ul>

            <h3>Giorno 3 - Domenica</h3>
            <ul>
              <li>09:30 - Colazione tardiva</li>
              <li>11:00 - Check-out e partenza</li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>❤️ Cosa Dicono le Coppie</h2>
          <div className="testimonial">
            <blockquote>
              "Weekend perfetto per il nostro anniversario! Camera romantica, cena ottima, personale gentilissimo. Castelbuono è un gioiello nascosto!"
            </blockquote>
            <cite>- Marco e Giulia, Milano ⭐⭐⭐⭐⭐</cite>
          </div>
          {/* Altre 2-3 recensioni */}
        </section>

        {/* CTA principale */}
        <section className="booking-cta">
          <h2>Prenota Ora il Tuo Weekend Romantico</h2>
          <form action="/api/booking" method="POST">
            <label>
              Date Arrivo:
              <input type="date" name="checkin" required />
            </label>
            <label>
              Nome e Cognome:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Telefono:
              <input type="tel" name="phone" required />
            </label>
            <button type="submit" className="cta-button-large">
              💝 Prenota Ora - €280 per Coppia
            </button>
          </form>
          <p className="guarantee">
            ✅ Miglior prezzo garantito · ✅ Cancellazione gratuita fino a 7 giorni prima
          </p>
        </section>

        {/* FAQ specifica offerta */}
        <section>
          <h2>Domande Frequenti sull'Offerta</h2>
          <dl>
            <dt>L'offerta è valida tutto l'anno?</dt>
            <dd>L'offerta è valida dal 15 gennaio al 15 dicembre, escluso agosto e festivi.</dd>

            <dt>Posso aggiungere una notte extra?</dt>
            <dd>Sì, notte extra a €90 (camera + colazione).</dd>

            <dt>Il menu della cena è personalizzabile?</dt>
            <dd>Sì, comunica allergie/intolleranze in fase di prenotazione.</dd>
          </dl>
        </section>
      </main>
    </>
  )
}
```

---

## 6. Internal Linking Strategy

### Pattern da Seguire

```typescript
// In ogni pagina, aggiungi 5-10 link interni contestuali

// Esempio in Pagina Castello Ventimiglia:
<p>
  Il Castello dista solo 2 minuti a piedi dall'
  <a href="/">Hotel Paradiso delle Madonie</a>,
  perfetto per chi vuole esplorare
  <a href="/castelbuono">Castelbuono</a> e i
  <a href="/borghi-siciliani">borghi circostanti</a>.

  Durante la tua visita, non perdere la
  <a href="/esperienze-enogastronomiche/manna-castelbuono">degustazione della Manna</a>
  e i famosi panettoni della
  <a href="/esperienze-enogastronomiche/pasticceria-fiasconaro">Pasticceria Fiasconaro</a>.

  Per gli amanti della natura, consigliamo l'
  <a href="/parco-delle-madonie/trekking-pizzo-carbonara">escursione a Pizzo Carbonara</a>
  o la visita alle
  <a href="/parco-delle-madonie/gole-di-tiberio">Gole di Tiberio</a>.
</p>
```

### Link Silos Structure

```
Homepage
├─ Castelbuono (pillar)
│  ├─ Castello Ventimiglia
│  ├─ Cappella Serpotta
│  ├─ Dove Mangiare
│  └─ Come Arrivare
│
├─ Parco Madonie (pillar)
│  ├─ Pizzo Carbonara
│  ├─ Agrifogli Giganti
│  ├─ Gole Tiberio
│  └─ Piano Battaglia
│
└─ Eventi (pillar)
   ├─ Ypsigrock
   ├─ DiVino
   └─ Funghi Fest
```

---

## 7. Image Optimization Checklist

```bash
# Per ogni immagine:

1. Naming SEO-friendly
   ❌ IMG_1234.jpg
   ✅ castello-ventimiglia-castelbuono-sicilia.jpg

2. Dimensioni ottimizzate
   - Hero images: 1920x1080px max
   - Content images: 1200x800px max
   - Thumbnails: 400x300px
   - Mobile: 800x600px

3. Formato moderno
   - Preferenza: WebP (80% compressione)
   - Fallback: JPG ottimizzato

4. Alt text descrittivo
   <img
     src="/images/castello-ventimiglia.webp"
     alt="Castello dei Ventimiglia di Castelbuono illuminato al tramonto con torre medievale del 1316"
     width="1200"
     height="800"
     loading="lazy"
   />

5. Lazy loading (tranne above-the-fold)
```

---

## 8. Performance Tips

```typescript
// Dynamic imports per componenti pesanti
const HeavyComponent = dynamic(() => import('@/components/heavy-component'), {
  loading: () => <LoadingSkeleton />,
  ssr: false, // Se non necessario server-side
})

// Prefetch link importanti
<link rel="prefetch" href="/camere" />
<link rel="dns-prefetch" href="//www.booking.com" />

// Font optimization
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // FOUT prevention
  preload: true,
})
```

---

## 📊 Monitoring & Testing

### Weekly Checks

```bash
# 1. Test Schema Validity
https://validator.schema.org/
https://search.google.com/test/rich-results

# 2. PageSpeed Insights
https://pagespeed.web.dev/

# 3. Mobile-Friendly Test
https://search.google.com/test/mobile-friendly

# 4. Broken Links
# Screaming Frog o online:
https://www.deadlinkchecker.com/

# 5. Google Search Console
- Coverage issues
- Mobile usability
- Core Web Vitals
- Performance report
```

---

## 🎯 Quick Win Checklist

Prima settimana post-deploy:

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing Homepage + top 10 pages
- [ ] Validate ALL schemas (validator.schema.org)
- [ ] Test Core Web Vitals (target: all green)
- [ ] Setup Google Analytics 4
- [ ] Setup Google Tag Manager
- [ ] Optimize Google Business Profile
- [ ] Upload 20+ photos to GBP
- [ ] Create first 2 blog posts (1.500+ words each)

---

Questi esempi mostrano come usare TUTTE le utility SEO implementate per creare pagine ottimizzate che rankeranno in Top 3 su Google! 🚀
