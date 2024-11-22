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

Tot slot heb ik samen met Wing de taken verdeeld van de Agenda en Contact pagina van Bieb in Bloei, waar wij aankomende week aan gaan werken.

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

## 19-11-2024

### Wat heb ik gedaan?:

Ik heb gewerkt aan 2 issues van Bieb in Bloei over het analyseren van hoe een form gesubmit word, en een responsive bug opgelost op de contact pagina.

## 20-11-2024

### Wat heb ik gedaan?:

Ik heb gewerkt aan mijn taken uit het projectplan voor bieb in bloei. Vervolgens heb ik een prefers-reduced-motion & een prefers-color-scheme media query toegepast op mijn form component.

### Wat heb ik geleerd?:

**Workshop The New Responsive**

Scrollsnap, Aspect ratio, Flexbox, CSS Grid, Container Queris, etc. zijn allemaal dingen die responsiveness bevorderen.

<img width=400 src="https://github.com/user-attachments/assets/7af08add-40a9-465f-8381-e0234611a3ba">

**User-preference queries:**
- prefers-color-scheme
- prefers-reduced-motion
- prefers-contrast

**Responsive to the user:**
- Instellingen van een gebruiker, bijvoorbeeld systeemkleur, contrast en animatie

**De anatomie van een media query:**
```CSS
@media screen and (width >= 35rem) {
  body {
    padding: 1rem;
  }
}
```
Screen is een media type.
**Media features**

**Level 5:**
- prefers-reduced-motion: gebruik altijd default geen animatie. Wanneer "no-preference" in de media query, dan animatie.
- prefers-reduced-transparency
- prefers-contrast
- forced-colors
- prefers-color-scheme
- prefers-reduced-data
- inverted-colors (color media features)

**Container queries** worden goed ondersteund.

**Container style queries** zijn er ook.

**Responsive to the form factor:**
Je hebt single screens, two screens, fold screens, etc. Hier word ook al over nagedacht.

#### Lerend vermogen
Aan de hand van dit artikel https://web.dev/articles/new-responsive heb ik een aantal leerpunten genoteerd.

Container queries heb ik al een keer eerder gebruikt, container style queries daarentegen nog niet. [Deze bron](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries_2) van MDN heb ik hierover gevonden.

Voor gedetailleerde uitleg over container queries en container style queries met voorbeelden heb ik [deze bron](https://www.smashingmagazine.com/2024/06/what-are-css-container-style-queries-good-for/) gevonden van Smashing Magazine.

Een simpel voorbeeld van container style queries:
```CSS
.cards-container {
  --theme: dark;
}

@container style(--theme: dark) {
  .cards {
    background-color: black;
  }
```

## 21-11-2024

### Wat heb ik gedaan?:

Ik heb vanochtend gewerkt aan een workshop card component, en heb daarop een container query toegepast. Daarna hebben we een code/design over onze component(library) review gehad.
