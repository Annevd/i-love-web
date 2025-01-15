# Inhoudsopgave

- [Week 2 recap](#week-2-recap)
  - [13/01](#13-01-2025)
  - [14/01](#14-01-2025)
  - [15/01](#15-01-2025)
  - [16/01](#16-01-2025)
  - [17/01](#17-01-2025)

# Week 2 recap

## 13-01-2025

### Wat heb ik gedaan?:

Ik heb alle tests uitgevoerd op de Zadenpagina, en de testresultaten verwerkt in issues. Ook heb ik een aantal issues aangemaakt voor het refactoren en clean code van de website.

### Wat heb ik geleerd?:

**Workshop refactoring/clean code:**

Het schrijven van _clean code_ is wat je doet om jezelf professional te kunnen noemen. Er bestaan geen smoesjes om minder dan je best te doen.

Code is _clean_ als het gemakkelijk te begrijpen is door iedereen in het team. Clean code kan worden gelezen en verbeterd door andere ontwikkelaars dan de oorspronkelijke auteur.

**Begrijpelijk betekent:** leesbaar, aanpasbaar, uitbreidend

> Try and leave this world a little better than you found it

Als we allemaal onze code net iets schoner inchecken dan toen we die uitcheckten, zou de code simpelweg niet kunnen verouderen.

Opruimen hoeft niets groots te zijn. Verander één variabelenaam in iets beters, splits één te grote functie op, elimineer één klein stukje duplicatie, maak één samengesteld if-statement overzichtelijker.

- **Gebruik betekenisvolle namen:** Vermijd cryptische afkortingen of generieke termen zoals a, x, data of temp.
- **Schrijf kleine functies:** Functies moeten klein zijn en slechts één verantwoordelijkheid hebben. Stel je functie op met zo min mogelijk parameters. Het liefst monadisch maar als het nodig is diadisch, vermeid triadisch. Voorkom side-effects, dingen die buiten de scope van de functie vallen. Een functie heeft één ingang - _parameters_ - en één uitgang - _return_.
- **Gebruik goed commentaar:** Less is more. Goede code heeft weinig commentaar nodig omdat het zichzelf uitlegt. Gebruik comments alleen als de code zonder context niet duidelijk is.
- **Maak je code leesbaar:** Maak het intuïtief en helder.

---

_Refactoring_ is een proces van het verbeteren van de structuur van code zonder het gedrag te veranderen. 

Het doel is code leesbaarder, eenvoudiger te begrijpen, makkelijker onderhoudbaar en makkelijker uitbreidbaar te maken.

Het bestaat uit kleine veranderingen, zoals hernoemen van variabelen, opsplitsen van lange functies of verwijderen van dubbeling.

---

- **Patroon:** Hernoem functie declaratie

De _handtekening_ van een functie omvat de naam, parameters, en soms het returntype.

Dit patroon wordt bijvoorbeeld gebruikt om een functie een duidelijkere naam te geven, parameters toe te voegen of te verwijderen, of de volgorde van parameters te wijzigen.

Het doel is om de functie beter aan te laten sluiten bij de behoeften van de codebase zonder gedrag te veranderen.

```JS
//before
function ot(r, x ) {}

//after
function omtrek(straal){}
`
```

- **Patroon:** splits _conditionals_ op

- **Patroon:** Vervang _loops_ door _pipelines_

Traditionele iteraties over collecties (zoals _for_-, _foreach_- of _while_-loops) worden vervangen door een functionele stijl met behulp van een pipeline van operaties.

Dit patroon maakt gebruik van methoden _map_, _filter_, en _reduce_, die declaratief beschrijven wat er met de data moet gebeuren in plaats van hoe.

- **Patroon:** Verwijder dode code

Overbodige of niet-gebruikte code wordt opgespoord en verwijderd uit de codebase.

Dode code zijn functies, variabelen, klassen of andere elementen die nergens meer worden aangeroepen of geen effect meer hebben op het gedrag van het systeem

- **Patroon:** Verschuif statements

Herpositioneren van code binnen een methode om de leesbaarheid en logische volgorde te verbeteren. Het doel is gerelateerde statements dichter bij elkaar te plaatsen en irrelevante of afleidende stukken code te verplaatsen naar een meer geschikte locatie.

Door statements op een logischere manier te ordenen, wordt de structuur van de methode duidelijker, wat leidt tot beter begrip en eenvoudiger onderhoud.


---

**Best practices in Sveltekit:**

- `/src/lib` voor componenten en helpers
- `/src/routes` voor layout en pagina's 
- `/static` voor statische assets

**Tip**: Voorkom het inladen van componeten, die componenten inladen, die componenten inladen...

**Tip:** Als een bestand te groot wordt zet je `<script>` en `<style>` elementen in een apart bestand en importeer die!

**Performance:**

Sveltekit doet op het gebied van performance al een heleboel werk voor je: 
- **Code-splitting**: Alleen de code die nodig is voor de actieve pagina wordt ingeladen
- **Asset preloading**: De juiste assets op het juiste moment ipv een waterval van bestanden inladen
- **File hashing**: Unieke bestandsnaam voor assets zodat caching werkt voor gebruikers
- Request coalescing
- Parallel loading
- Pre-rendering
- Link preloading

In de lokale `dev` mode reageert de site anders als in `build` mode op jouw hosting oplossing (Netlify/Vercel).

Test dus in ieder geval de `preview` versie lokaal en daarnaast ook altijd de definitieve versie op de live omgeving op performance.

**Afbeeldingen:**

Een van de meest impactvolle optimalisaties ligt in het reduceren van bestandsgrootte van afbeeldingen.

Jullie weten hoe je met de hand responsive images in je HTML opneemt maar er is een door svelte gemaakte speciale package `@sveltejs/enhanced-img`.

```JS
npm install --save-dev @sveltejs/enhanced-img
import {sveltekit } from '@sveltejs/kit/vite';
import {enhancedImages} from '@sveltejs/enhanced-img';
import {defineConfi} from 'vite';

export default defineConfig ({
    plugins: [
        enhancedImages()
        sveltekit()
    ]
});
```

Dit werkt alleen op images die lokaal in jouw project staan. Het werkt dus niet op images uit de database.

**Sitemaps:**

Sitemaps kun je ook in Sveltekit laten generen met een `sitemap.xml`. Zie Sveltekit Docs.

## 14-01-2025

### Wat heb ik gedaan?:

De Javascript deep dive van Joost bijgewoond en aan issues van Bieb in Bloei gewerkt.

### Wat heb ik geleerd?:

- https://github.com/Annevd/i-love-web/issues/18

## 15-01-2025

### Wat heb ik gedaan?:

Voorbereiding van de code/design review van vrijdag en de pull request van Rutger en Larissa gereviewed.

