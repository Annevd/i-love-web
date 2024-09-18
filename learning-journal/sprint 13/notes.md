# Learning journal

## Inhoudsopgave

- [Frameworks](#frameworks)
- [Sveltekit](#sveltekit)
- [Hoe gebruikt je Sveltekit in je eigen project?](#hoe-gebruik-je-sveltekit-in-je-eigen-project)

- [Week 1 recap](#week-1-recap)
- [Week 2 recap](#week-2-recap)
- [Week 3 recap](#week-3-recap)

## Frameworks

Een framework in de context van frontend is een set van tools, bibliotheken, en richtlijnen helpt bij het bouwen en structureren van softwaretoepassingen. Het biedt een basisstructuur waarbinnen ontwikkelaars hun code kunnen schrijven, waardoor ze niet alles vanaf nul hoeven op te bouwen.

**Bijvoorbeeld:**

Stel je voor dat je een website wilt maken. Zonder framework moet je zelf alles regelen: van het opzetten van de server tot het maken van de HTML, CSS, en JavaScript code voor de gebruikersinterface. Met een framework, zoals SvelteKit, krijg je een startpunt met alle basisfunctionaliteiten al ingebouwd. Je kunt je dan concentreren op het schrijven van de specifieke logica voor jouw website, terwijl het framework zorgt voor de onderliggende zaken.

## Sveltekit

**Handige links:**

- [Creating a project with Sveltekit](https://kit.svelte.dev/docs/creating-a-project)
- [Getting started with Directus & Sveltekit](https://docs.directus.io/blog/getting-started-directus-sveltekit.html)
- [Sveltekit Docs](https://kit.svelte.dev/docs/introduction)
- [Getting started with Svelte](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
- [Getting Started with Directus and SvelteKit Youtube Tutorial](https://www.youtube.com/watch?v=V-RyeZu_Z20)
- [Sveltekit Interactive Tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)

### [What is Svelte?](https://kit.svelte.dev/docs/introduction#what-is-svelte)

In short, Svelte is a way of writing user interface components — like a navigation bar, comment section, or contact form — that users see and interact with in their browsers. The Svelte compiler converts your components to JavaScript that can be run to render the HTML for the page and to CSS that styles the page. 

### [What is Sveltekit?](https://kit.svelte.dev/docs/introduction#what-is-sveltekit)

SvelteKit is a framework for rapidly developing robust, performant web applications using [Svelte](https://svelte.dev/). If you're coming from React, SvelteKit is similar to Next. If you're coming from Vue, SvelteKit is similar to Nuxt.

**Project structure:**

- `package.json` will be familiar if you've worked with Node.js before. It lists the project's dependencies — including svelte and @sveltejs/kit — and a variety of scripts for interacting with the SvelteKit CLI.
- `svelte.config.js` contains your project configuration.
-vite.config.js contains the [Vite](https://vitejs.dev/) configuration. Because SvelteKit uses Vite, you can use [Vite features](https://vitejs.dev/guide/features.html) like hot module replacement, TypeScript support, static asset handling and so on.

- `src` is where your app's source code goes. src/app.html is your page template (SvelteKit replaces the %sveltekit.head% and %sveltekit.body% as appropriate), and src/routes defines the [routes](https://learn.svelte.dev/tutorial/pages) of your app.

- Finally, `static` contains any assets (like a favicon.png or a robots.txt) that should be included when your app is deployed.

### [Sveltkit VS Svelte](https://kit.svelte.dev/docs/introduction#sveltekit-vs-svelte)

Svelte renders UI components. You can compose these components and render an entire page with just Svelte, but you need more than just Svelte to write an entire app.

SvelteKit helps you build web apps while following modern best practices and providing solutions to common development challenges. It offers everything from basic functionalities — like a [router](https://kit.svelte.dev/docs/glossary#routing) that updates your UI when a link is clicked — to more advanced capabilities. Its extensive list of features includes [build optimizations](https://vitejs.dev/guide/features.html#build-optimizations) to load only the minimal required code; [offline support](https://kit.svelte.dev/docs/service-workers); [preloading](https://kit.svelte.dev/docs/link-options#data-sveltekit-preload-data) pages before user navigation; [configurable rendering](https://kit.svelte.dev/docs/page-options) to handle different parts of your app on the server via [SSR](https://kit.svelte.dev/docs/glossary#ssr), in the browser through [client-side rendering](https://kit.svelte.dev/docs/glossary#csr), or at build-time with [prerendering](https://kit.svelte.dev/docs/glossary#prerendering); [image optimization](https://kit.svelte.dev/docs/images); and much more. Building an app with all the modern best practices is fiendishly complicated, but SvelteKit does all the boring stuff for you so that you can get on with the creative part.

### Waarom een Framework zoals SvelteKit Gebruiken?

- **Efficiëntie & Productiviteit**: Frameworks zoals SvelteKit bieden herbruikbare componenten en automatische configuraties zoals routing, waardoor je sneller kunt ontwikkelen.

- **Best Practices & Consistentie**: Ze zorgen voor een gestandaardiseerde projectstructuur en bieden moderne webfunctionaliteiten zoals server-side rendering (SSR) zonder extra moeite.

- **Betere Prestaties**: Frameworks optimaliseren automatisch de gegenereerde code voor snellere laadtijden en betere prestaties.

- **Community & Ondersteuning**: Een grote community betekent toegang tot tools, plugins, documentatie en voorbeelden, wat het oplossen van problemen vereenvoudigt.

- **Onderhoudbaarheid & Schaalbaarheid**: Ze bieden gestructureerde manieren om je applicatie te laten groeien en blijven up-to-date met de nieuwste webstandaarden.

Zonder een framework kost het meer tijd om basisfunctionaliteiten zelf te ontwikkelen en te onderhouden.

## Hoe gebruik je Sveltekit in je eigen project?

**In terminal:**

1. `npm create svelte@latest my-app`
2. `cd my-app`
3. `npm install`
4. `npm run dev`

Na installatie zie je een projectstructuur die mappen zoals `src` (waar je broncode komt), `routes` (voor je pagina's), en `static` (voor statische bestanden zoals afbeeldingen) bevat.

Binnen de `src/routes` map kun je een nieuwe `.svelte` bestand aanmaken, bijvoorbeeld `about.svelte`, en dit zal automatisch een nieuwe route `/about` creëren in je applicatie.

Je kunt server-side rendering en API-routes toevoegen met bestanden zoals `hooks.server.js` of door .js-bestanden toe te voegen in de `src/routes/api` map.

Start je ontwikkelserver met: `npm run dev`

Voor een uitgebreide tutorial om ook met Directus te werken klik [hier](https://docs.directus.io/blog/getting-started-directus-sveltekit.html).

**Screenshot van de interactive tutorial over hoe je pagina's maakt:**

![image](https://github.com/user-attachments/assets/1feaf73f-cc9c-4e0a-b9fc-42dbd8e0c7d5)

**Screenshot van de interactive tutorial over hoe je een layout maakt:**

![image](https://github.com/user-attachments/assets/86c5e4c8-25c6-4b56-8376-e3a90c8e6642)

**Screenshot van de interactive tutorial over hoe je pagina's met een slug maakt:**

![image](https://github.com/user-attachments/assets/1c71776b-9595-4420-9244-35f61aa1e2d0)

**Screenshot van de interactive tutorial over hoe je data ophaalt en rendert:**

![image](https://github.com/user-attachments/assets/488089da-abc0-4984-93b8-c99c6c8160df)
![image](https://github.com/user-attachments/assets/1b7860ba-cc14-47d1-a8f1-41d8c63cec74)

## Week 1 Recap

### 2-9-2024 t/m 4-9-2024

- **Wat heb ik gedaan?:**

Afgelopen 3 dagen heb ik mij bezig gehouden met het verkennen van nieuwe informatie zoals Svelte en Sveltekit, hoe het werkt, wat het doet, en hoe je het zelf kan gebruiken. Ook heb ik samen met mijn team ontwerpen gemaakt voor onze squadpage en zijn we bezig geweest met het opzetten van de sveltekit omgeving en het maken van issues en een taakverdeling.

- **Wat heb ik geleerd?:**

Ik heb vandaag geleerd aan de hand van kit.svelte.dev en de demo van Justus hoe je zelf een basic Sveltekit project opzet.

- **Leervragen:**
    - Hoe laad ik data in vanuit directus met sveltekit? (beantwoord op 5-9-2024)
    - Hoe link ik naar een detailpagina?
    - Hoe maak ik pagina’s aan met sveltekit?

### 5-9-2024

- **Wat heb ik gedaan?:**

Vandaag ben ik bezig geweest met het zelf opzetten van een Sveltekit project met een koppeling naar Directus. In de repo van mijn persoonlijke visitekaartje kan ik nu data uit Directus ophalen om in de browser te weergeven. 

Ook heb ik mij bezig gehouden met onderzoeken hoe ik container queries kan toepassen in ons Mondriaan grid, voor responsive kaartjes binnen het grid. Daarnaast heb ik ook alvast onderzoek gedaan naar hoe je een custom cursor kan instellen en wat voor design ik ervoor wil maken. 

Tot slot ben ik begonnen met het ontwerpen van mijn visitekaartje.

- **Wat heb ik geleerd?:**

Vandaag heb ik geleerd hoe ik data kan ophalen en renderen vanuit Directus met Sveltekit.

## Week 2 Recap

### 9-9-2024

- **Wat heb ik gedaan?:**

Vandaag ben ik begonnen met het verder werken aan mijn visitekaartje. Ik heb het ontwerp extra uitgewerkt, een breakdown gemaakt en een wireflow gemaakt. Ook heb ik het in figma zo goed mogelijk proberen te designen.

Daarna kregen we een workshop over Figma met handige tips over het maken van componenten en styles.

Vervolgens heb ik met mijn team weer verder gewerkt aan de squadpage. Wij hebben nu ook in Figma ons design gemaakt en onze inspiratie erin gezet. Ook heb ik nog geholpen een aantal bugs op te lossen in het Mondriaan grid, het reviewen van een pull request en ben ik begonnen aan het design van de custom cursor.

- **Wat heb ik geleerd?:**

Ik heb vandaag geleerd hoe je componenten, styles, auto-layout en grid layout in Figma kan gebruiken.

### 10-9-2024

- **Wat heb ik gedaan?:**

Ik ben begonnen met het opzetten van het begin van mijn visitekaartje. Ik heb zo goed als alle HTML erin, op 1 svg na, en de basic CSS zoals een grid zit erin. Verder ben ik bezig geweest met de custom cursor en heb ik een pull request van mijn teamgenoot gereviewd en approved.

### 11-9-2024

- **Wat heb ik gedaan?:**

Als eerst ben ik in de ochtend verder gegaan aan mijn visitekaartje totdat de workshop Creative Coding begon. Ik heb aan de CSS gewerkt zoals custom properties, custom fonts met `@font-face`, lettertypes, lettergroottes en de styling.

- **Wat heb ik geleerd?:**

Ik heb vandaag geleerd over Creative Coding met CSS en Javascript, client side en server side.
Tijdens de [demo](https://github.com/joostf/squadpage-sveltekit/tree/main) van de workshop heeft Justus laten zien hoe je met CSS en JS je visitekaarte of squadpage kan opleuken. Bijvoorbeeld met scroll-driven animations in CSS, of met animations in Javascript. Je kan Javascript server side of client side gebruiken. 

Als je Javascript client side wil gebruiken heb je de functie [`onMount`](https://svelte.dev/docs/svelte#onmount) nodig en je script in de `static` folder(?).

Ook heeft Svelte een aantal standaard [ingebouwde transitions](https://svelte.dev/docs/svelte-transition) en animations die je kan importeren vanuit een library. In de [interactive tutorial](https://learn.svelte.dev/tutorial/transition) kun je oefenen met deze transitions en animations.

Tot slot heb ik geleerd hoe je je website live kan zetten met Vercel:

- [x] Voeg een nieuw project toe
- [x] Connect met je Git provider (GitHub in mijn geval)
- [x] Kies de juiste GitHub repository
- [x] Vercel start automatisch met het deployen van je project!



**Hoe je een schone sveltekit omgeving klaarzet:**

[Voorbeeldrepo Sveltekit](https://github.com/ju5tu5/squadpage-sveltekit)

1. maak een tijdelijke kopie van de folder van de squadpage repo
2. installeer een clean install van sveltekit voor de squadpage
3. voeg in `/routes/+page.js` deze regel code toe: `export let csr = false`
4. neem in `/lib/fetch-node.js` de code over uit hetzelfde bestand van je laatste node.js project van sprint 12
5. importeer deze function in `/routes/+page.server.js`
6. check aan de hand van het voorbeeld of je alles goed gedaan hebt
7. copy/paste als laatste jullie toegevoegde svelte code terug in `/routes/+page.svelte`

## 12-9-2024

**Wat heb ik gedaan?:**

Vandaag heb ik verder gewerkt aan mijn visitekaartje. Ik ben begonnen met het maken van de ster animatie, ik moet alleen nog 1 issue daarvan oplossen en dan is het klaar. De SVG van de ster heb ik zelf in Figma gemaakt, omdat ik op internet geen perfecte svg naar mijn wensen kon vinden.
Ook heb ik de custom cursor omgezet tot SVG, die nu klaar is om te gebruiken.

## 13-9-2024

**Wat heb ik gedaan?:**

De animatie van de sterren om het kaartje heen heb ik vanochtend afgemaakt. Ook heb ik een we love web gevolgd van Vasilis van Gemert over leuke en "nutteloze" dingen maken, en hebben wij feedback op onze squadpage en samenwerking gekregen.

**Wat heb ik geleerd?:**

Ik heb geleerd hoe je efficienter issues en pull requests kan schrijven.

**Feedback:**

- Te lange issues maakt niet uit, maak goede beschrijvende issue titels
- Schrijf specifiekere issues
- Zorg ervoor dat mensen buiten je team het ook zouden begrijpen
- Alles wat over die taak gaat moet erbij staan

### Handige links

- [Voorbeeldrepo Sveltekit](https://github.com/ju5tu5/squadpage-sveltekit)
- [Voorbeeldrepo Creative Coding](https://github.com/joostf/squadpage-sveltekit/tree/main) CSR en SSR
- [Svelte transition](https://svelte.dev/docs/svelte-transition)
- [`onMount`](https://svelte.dev/docs/svelte#onmount)
- [Interactive tutorial transitions/animations](https://learn.svelte.dev/tutorial/transition)

## Week 3 Recap

### 16-9-2024

**Wat heb ik gedaan?:**

Ik ben in de ochtend begonnen met het schrijven van een ReadME voor mijn visitekaartje. Vervolgens heb ik geprobeerd de issues in ons team projectboard beschrijvender te maken voor meer duidelijkheid. Ook heb ik aan een klasgenoot gevraagd of ze de installatie instructies uit mijn ReadME wilde testen om te kijken of alles werkt, dit was gelukkig wel het geval! Hetzelfde heb ik voor haar gedaan, en een paar issues geschreven. 

Tot slot heb ik nog labels aangemaakt passend bij de DLC om bij de issues te zetten zodat het nog ff wat georganiseerder wordt.

In de middag hadden we een workshop over epic -> story -> task, planning poker en prioritizing met MoSCoW.

**Wat heb ik geleerd?:**

Ik heb vandaag geleerd hoe je effecient van een epic, naar een story, naar een user story, naar verschillende tasks kan gaan en deze in een project board kan zetten. Ook heb ik hierbij geleerd hoe je deze een tijdsinschatting kan geven van een van de volgende waardes: ? 1 2 3 5 8 13 21 infinite, om zo een goede grip te krijgen op je project, en hoeveel tijd je met elke taak bezig bent. Tot slot heb ik geleerd hoe je deze taken kan prioritiseren op basis van MoSCoW, Must have, Should have, Could have en Want to have.

### 17-9-2024

**Wat heb ik gedaan?:**

Ik heb vandaag eindelijk de custom cursor geïmplementeerd en gemerged met de main branch. Ook heb ik een basic container query gemaatk en die ook gemerged met de main branch.
Daarnaast ben ik veel bezig geweest met het oplossen van issues van mijn profile card, en het documenteren hiervan. 

### 18-9-2024

**Wat heb ik gedaan?:**

Ik heb mijn projectboard gelabeled met fases van de DLC en met MoSCoW. Ook heb ik een dark mode kleurenpalet samengesteld voor mijn visitekaartje, ik weet alleen nog niet of ik daar aan toe kom. 
Na het college heb ik nog gewerkt aan data fallback met `if/else` voor de person data, lettergroottes veranderd en een lettertype toegevoegd.

**Wat heb ik geleerd?:**

Hoe lever je een project op bij de opdrachtgever:

- **Code:**
  - gestructueerde code (conventies)
  - semantiek
  - geen comments
  - geen `console.log()`
  - goede tabs

- **Readme.md:**
  - kenmerken (1)
  - livelink (2)
  - visuals (3)
  - instructies (4)
  - installatiehandleiding (5)
  - CMS uitleg (6)
  - huisstijl (7)
  - bijdragen (hints voor volgende dev-teams) (8)
  - bronnen (9)
  - badges/labels met gebruikte technologie (10)

- **Live zetten:**
  - Github pages
  - Vercel
  - Netlify
  - onrender
