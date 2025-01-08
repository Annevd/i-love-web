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

Waardeert het vermogen van anderen (Lisa):

Ontwerpen:

> Een goed ontwerp begint bij de analyse

Stap 1: Analyseren.
je bedenkt je idee, vanuit daar maak je orienterende schetsen, met daarbij uitleg van t idee

daarna een brainstormsessie: maak n beeld voor jezelf wat je er in wilt hebben -> moodboard

vanuit het moodboard ga je terug naar de orienterende schetsen, je weet dan zeker wat er teurg moet komen in de schetsen. Op papier

In de ontwerpfase maaktz e highfi schetsen in figma, hier steek je veel tijd en moeite in. Vervolgens maak je vanuit daar responsive schetsen, mobile first normaal gesproken met soms uitzonderingen

daarna een breakdownschets in figma 

Zo nodig ook nog een datamodel.

Kleurpalet: tijdens d ebrainstormsessie bedenk je je alvast welke kleuren je terug wil laten komen. Probeer die standaard pinterest kleurpaletten te vermijden. Ga uit van kleuren die opvallen in normale foto's.

Het belangrijkste zit hem in het analyseren

veel op pinterest, maak borden
je moet wel eerst weten wat je wil schetsen, dus eerst een brainstormsessie 

je hebt altijd een highlight en een shadow nodig van je standaard hues (denk aan de les van koop).
Denk aan 1 hoofdkleur (rood bij lisa) en 1 accentkleur (bij lisa de standaard hues) die voornamelijk in beeld komt. Zwart wit heb je altijd nodig.
Denk aan verschillende methoden om de kleurencirkel te gebruiken om een kleurenpalette samen te stellen.

Veel heen en weer van analyseren - ontwerpen, kan altijd nog teurg

https://github.com/lisavanmansom/digital-garden-next/issues/2

Het ontwerpproces is overal anders. Dit is voor een opdracht waar je zelf alle controle hebt.

Als je ergens tegenaanloopt moet je terug gaan naar de brainstormsessie en opnieuw inspiratie opdoen.
