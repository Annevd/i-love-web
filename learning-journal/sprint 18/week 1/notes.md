# Inhoudsopgave

- [Week 1 recap](#week-1-recap)
  - [6/01](#6-01-2025)
  - [7/01](#7-01-2025)
  - [8/01](#8-01-2025)
  - [9/01](#9-01-2025)
  - [10/01](#10-01-2025)

# Week 1 recap

## 6-01-2025

### Wat heb ik gedaan?:
Sprintplanning

### Wat heb ik geleerd?:

De software release life cycle (SRLC): Het proces van ontwikkelen, testen en distribueren van software. Het bestaat gewoonlijk uit verschillende fases, zoals pre-alpha, alpha, beta en release candidate, voordat de final versie, of "gold", aan het publiek wordt vrijgegeven.

<img width=300 src="https://github.com/user-attachments/assets/186463c3-7f99-4708-9636-b25bba891a4c">

Wij gaan ons nu richten op de _release candidate_ fase. Een release candidate, ook wel bekend als gamma testing of "going silver", is een bètaversie met de potentie een stabiel product te worden, klaar om vrijgegeven te worden tenzij ernstige bugs opduiken. 

- Maak een nieuw team canvas
- Nette feature branches
- Gecontroleerde pull requests en issues
- Gebruik het projectboard met goed afbakende taken. Gebruik DLC labels en MoSCoW labels en poker alle taken
- Een pull request reviewen is ook een taak

---

- **CSR**: Client Side Rendering
  - De webbrowser laadt een leeg HTML bestand. Met JS en CSS wordt een connectie gemaakt met een backend en de pagina ge-renderd. 
- **SSR**: Server Side Rendering
  - Bij elke aanvraag wordt op de server connectie gemaakt en de pagina ge-renderd. De webbrowser ontvangt de complete HTML voor de pagina. (PHP, Jango, ASTRO)
- **SSG**: Static Site Generation
  - Tijdens de build worden alle mogelijke pagina's al ge-renderd. Het resultaat is een statische website die eenvoudig gehost kan worden. (11ty) 
- **ISR**: Incremental Static Regeneration
  - De build wordt periodiek uitgevoerd en alleen bij aangepaste content worden de specifiek veranderde pagina's opnieuw ge-renderd. 
- **CDN**: Content Delivery Network
- **CI**: Continuous Integration

> Als je weinig updates uit voert, is Static Site Generation het beste voor je gebruikers!

**Static Site Generation (en CDN):**

**Voordelen SSG:**
- Veiligheid
- Performance
- Schaalbaarheid (CDN)
- Gratis Hosting

**Nadelen SSG:**
- Build time
- Minde dynamische content

Natuurlijk heeft Sveltekit een optie voor SSG, je installeert daarvoor _adapter-static_ en maakt aanpassingen in `svelte.config.js`.

Continuous Integration (CI) is het automatiseren van de integratie van codeaanpassingen in een softwareproject. Het is een fundamentele _best practice_ binnen DevOps.

Door CI kunnen ontwikkelaars codeaanpassingen frequent samenvoegen in een centraal repository, waar vervolgens automatisch _builds_ en _quality_ tests worden uitgevoerd. Op Github kan je gebruik maken van _Actions_ om CI te implementeren.

Koppel je eigen domeinnaam aan Github Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site 

**Argumenten waarom SSG de beste keuze is voor Bieb in Bloei:**
- **Supersnelle laadtijden:** Een SSG genereert statische HTML-pagina's vooraf, die direct via een CDN (Content Delivery Network) worden geleverd. Dit verminderd/verwijderd wachttijden door server-side verwerking.
- **Geoptimaliseerd voor snelheid:** Statische bestanden zoals HTML, CSS en JavaScript zijn lichtgewicht en worden snel geladen, wat de gebruikerservaring verbetert.
- **Eenvoudig opschalen:** Omdat de site statische bestanden gebruikt, kan deze grote hoeveelheden verkeer aan zonder dat extra servers nodig zijn.
- **Geen serverproblemen:** Er is geen server-side logica, dus pieken in verkeer veroorzaken geen prestatieproblemen.
- **Beter vindbaar:** Statische sites genereren schone en gestructureerde HTML, wat zoekmachines helpt om de site beter te indexeren.
- **Hogere snelheid, betere ranking:** Google geeft de voorkeur aan snelle websites, wat de SEO-score verbetert.
- **Gratis of goedkope hosting:** Platformen zoals Netlify bieden vaak gratis hosting voor statische sites.

## 7-01-2025

### Wat heb ik gedaan?:

Ik heb een argumentatieproces doorlopen over waarom SSG de beste deployment-methode voor Bieb in Bloei is. Vervolgens heb ik aan 3.3.2 gewerkt in Portflow.

## 8-01-2025

### Wat heb ik gedaan?:

In de ochtend heb ik gementord bij de eerstejaars waar ik heb geholpen met codevragen en issues.

### Wat heb ik geleerd?:

**GSAP:** Met GSAP kan je alles animeren


#### Lerend vermogen

**3.5.3: Waardeert het vermogen van anderen (Lisa M):**

Naar aanleiding van mijn ambitie om beter te worden in design/ontwerpen, heb ik aan Lisa gevraagd of zij mij door haar volledige ontwerpproces wilde meenemen. Ik hoopte hierbij beter te begrijpen hoe je het ontwerpproces aanpakt, van begin tot eind.

We nemen hierbij het ontwerpproces van haar [learning journal](https://github.com/lisavanmansom/digital-garden-next/issues/2) als uitgangspunt.

**Overige documentatie:**
- [Brainstormsessie](https://github.com/lisavanmansom/digital-garden-next/issues/6)
- [Oriënterende schetsen](https://github.com/lisavanmansom/digital-garden-next/issues/7)
- [Moodboard](https://github.com/lisavanmansom/digital-garden-next/issues/8)

**De analysefase:**

> "Een goed ontwerp, begint bij de analyse"

Voordat je begint met ontwerpen, is het belangrijk om eerst uitgebreid te analyseren.
Je bedenkt eerst een idee en daarna begin je pas met het maken van orënterende schetsen.

> Je kan ook, als je al een grof idee hebt, alvast beginnen met oriënterende schetsen, dan analyseren, en dan weer teruggaan naar de schetsen om ze eventueel aan te vullen.

Hoe begin je nou zo'n analysefase? Voor Lisa begint dat bij een brainstormsessie. Er zijn meerde manieren om dit te doen, maar de meest voor de hand liggende is bijvoorbeeld het opzoeken van inspiratie op pinterest.
 
Wat je moet onthouden wanneer je inspiratie opzoekt op pinterest is dat je niet letterlijk website ontwerpen per se hoeft op te zoeken. Je kan je inspiratie uit van alles halen, zoals de kleuren, typografie of andere grafische elementen van een magazinecover, een schilderij of andere kunst. Beperk je dus niet alleen in het opzoeken van webdesign.

Ook bedenk je alvast welke kleuren je terug wil laten komen in je ontwerp. Vermijd al die aesthetic kleurenpaletten op pinterest. Deze zijn namelijk nooit compleet, en zijn vaak niet geschikt om kant en klaar toe te passen in web design.

Vervolgens maak je een moodboard met daarin álle elementen die je er sowieso in wilt hebben.

Aan de hand van het moodboard kan je beginnen of verder gaan met de oriënterende schetsen. Dit doe je heel los op papier, met beschrijvende tekst over wat er in moet.

**De ontwerpfase:**

Na te hebben gebrainstormed en geschetst, kan eindelijk de echte ontwerpfase beginnen. 

Om te beginnen maakt je in Figma een High-Fi schets van je ontwerp, hier mag je best veel tijd en moeite in steken.

Als je blij bent met je ontwerp kan je beginnen met een responsive versie maken in Figma, bijvoorbeeld mobiel of tablet als nodig. Het is overigens wel handig om op mobiel te beginnen, maar in Figma maakt dat nog niet heel veel uit.

Daarna maak je natuurlijk een breakdownschets van het ontwerp. Zo nodig, kun je ook alvast een datamodel voor je website maken.

**Kleuren:**

Kleuren zijn veel complexer dan je misschien denkt. Er is eindeloos veel documentatie over kleurentheorie, en alles valt ook weer toe te passen in web design.

Voor webdesign is het belangrijk om een kleurenschema samen te stellen.

Ten eerste heeft een website altijd zwart én wit nodig. Daarnaast kan je 1 hoofdkleur hebben, met daarnaast meerdere accentkleuren. Van je accentkleuren heb je ook van elk een highlight en een schaduw versie nodig. (Denk ook terug aan de les van koop over kleur in webdesign)

De kleurencirkel kun je op veel manieren gebruiken om een kleurenpalet samen te stellen. Denk aan complimentaire kleuren, of kleuren die naast elkaar staan, of een van de vele andere manieren.

**Conclusie:**

Er zijn super veel manieren om een ontwerpproces aan te pakken, dit is er maar een. 

Het is belangrijk om te onthouden dat het ontwerpproces ook altijd anders is. Dit was voor een opdracht waar Lisa zelf de opdrachtgever is, en dus volledig creatieve vrijheid heeft. Maar dezelfde principes kun je over het algemeen overal toepassen.

Het ontwerpproces houdt niet op wanneer je een high-fi schets hebt gemaakt. Het ontwerp proces is iets waar je constant terug op kan komen als je nog niet tevreden bent, of het gevoel hebt dat er nog iets mis. 

Als je vast loopt, ga dan terug naar de brainstormsessie en daarna terug naar je ontwerp. Je kan altijd heen en weer blijven gaan!

## 9-01-2025

### Wat heb ik gedaan?:

Ik heb vandaag een praatplaat gemaakt als bewijslast voor 3.5.3
