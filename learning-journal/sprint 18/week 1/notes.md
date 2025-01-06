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
