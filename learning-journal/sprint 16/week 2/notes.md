# Inhoudsopgave

- [Week 2 recap](#week-2-recap)
  - [18/11](#18-11-2024)
  - [19/11](#19-11-2024)
  - [20/11](#20-11-2024)
  - [21/11](#21-11-2024)
  - [22/11](#22-11-2024)

# Week 2 recap

## 18-11-2024

### Wat heb ik gedaan?:

In de ochtend ben ik mentor geweest bij eerstejaars. Ook heb ik een aantal issues van Yu-Jing bekeken en verwerkt.

**Verwerkte issues:**
- https://github.com/Annevd/component-building-block/issues/18 
- https://github.com/Annevd/component-building-block/issues/19 
- https://github.com/Annevd/component-building-block/issues/20 
- https://github.com/Annevd/component-building-block/issues/16 

### Wat heb ik geleerd?:

**Advanced component Concepts**

#### 1. De structuur van jouw component library

Een _component library_ is een verzameling herbruikbare en generieke componenten die je aan een project kunt toevoegen, er bestaan vele standaard _component libraries_ die je kunt downloaden en gebruiken.

Het gebruik van een component library:
- Versnelt ontwikkeling door hergebruik (grotere kans op fouten)
- Zorgt voor consistentie in projecten (alles ziet er hetzelfde uit)
- Vergroot de onderhoudbaarheid (vergroot de chaos)

De chaos bedwingen door afspraken (conventies) te maken over:
- Naamgeving van componenten
- Naamgeving van variaties van componenten
- Naamgeving van _properties_ binnen componenten
- Metanaamgeving: componenten, patronen, etc.
- Indeling van de _$lib_ folder

Metanaamgeving is een hiërarcgiscge benadering om het over bepaalde soorten componenten te hebben.

In principe is alles component maar hoe noemen we:
- geneste componenten
- variaties op componenten
- samengestelde componenten

**5 Component library methodes:**

Page-Section-Component:
- **Pages**: volledige pagina's of schermen met een specifieke context betaand uit sections, bijv. de homepage
- **Sections**: secties van een pagina bestaand uit componenten bijv. een hero banner, een content sectie, een footer
- **Components**: herbruikbare componenten binnen de secties, bijv. knoppen, formulieren, kaarten

Functional layering:
- **Inputs**: componenten voor bijv. gebruikersinvoer, bijv. knoppen of formulieren
- **Display**: componenten voor het weergeven van informatie
- **Naviagtion**: componenten voor navigatie, menu's, breadcrumbs, skip-to-content
- **Structural**: layout-elementen die structuur bieden, grids, containers

LEGO:
- **Bricks:** kleine, niet herbruikbare stukjes, een icoon of tekstblok
- **Blocks:** herbruikbare basis componenten, een knop of een afbeelding
- **Assemblages:** gecombineerde componenten met een specifieke functie, formulier of kaart
- **Constructions:** complexe pagina-secties of templates, dashboard

Atomic Design:
- **Atoms:** basis bouwblokken van je pagina, HTML elementen zoals een `label`, `input`, of `button`
- **Molecules:** een groep atomen bij elkaar, een zoekformulier met een label, input én button
- **Organism:** een groep moleculen die samen een sectie van je website vormen, een header balk met een zoekformulier
- **Templates:** een groep organismen die samen een paginatype vormen, een overzichtspagina of detailpagina
- **Pages:** ingevuld template met inhoud

Presenter-Container
- **Presentational components:** UI-specifieke, stateless componenten die bepalen hoe data getoond wordt (bijv. een afbeelding)
- **Container components:** componenten die de presentational components van data voorzien en hun gedrag bepalen
- **Compositions:** combinatie van containers en presentational components die specifieke pagina-sectie vormen

#### 2. Component library

Op molecule niveau kan je container queries gebruiken om dingen te stylen op basis van hoeveel ruimte er omheen beschikbaar is.

Over de frustratie van werken met frameworks:

Svelte 5 introduced **some significant changes** to Svelte's API, including runes, snippets and event attributes. As a result, **some Svelte 3/4 features are deprecated** (though supported for now, unless otherwise specified) and will eventually be removed. We recommend that you incrementally migrate your existing code.

