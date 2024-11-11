# Inhoudsopgave

- [Week 1 recap](#week-1-recap)
  - [11/11](#11-11-2024)
  - [12/11](#12-11-2024)
  - [13/11](#13-11-2024)
  - [14/11](#14-11-2024)
  - [15/11](#15-11-2024)

# Week 1 recap

## 11-11-2024

### Wat heb ik gedaan?:

In de ochtend ben ik mentor geweest bij de eerstejaars.

- **Sprintplanning sprint 16 - Don't Repeat Yourself:**

> Over de component library en morphological charts.

- **Deeltaak: Component building block**
De focus ligt op het ontwerpen en bouwen van een robuust, goed werkend component, waarin de belangen van de eindgebruiker centraal staan. Denk aan Responsive, Accessible, Performing & Progessive Enhanced.

- **Opdracht: Identificeer jouw componenten**
Analyseer jullie website en identificeer componenten die niet té complex zijn maar ook niet té eenvoudig zijn.
Zorg minimaal voor interactie. Ideeën? Formulieren, tabbed content, carrousel, zoeken/filters, navigatie, favorieten, comments, etc.

- **Opdracht: Morphological chart**
Morphological charts are used in product design and are particularly useful to come up with unexpected alternatives for complex designs. Their origin lies in the field of industrial product design.

Benodigdheden:
- Wil om veel varianten van een app te bedenken
- Een systematische manier van werken
- Een vel A3 papier

Maak minstens 8 variaties voor jouw component. Zoek variaties door een goede morphological chart te maken. Werk daarna verschillende versie van je component uit in Figma. Dit moet woensdag af.

### Wat heb ik geleerd?:

- **Wat is een component library:**
Een map met alle componenten die je gebruikt (bijvoorbeeld `$lib`). Op het moment dat het er vele meer worden, wordt het onoverzichtelijk.

Een component library is een verzameling voorafgemaakte, geteste en goed gedocumenteerde UI-componenten die eenvoudig kunnen worden herbruikt in de gebruikersinterface van een product. Dit testen documenteer je bijvoorbeeld in een pull request.

Het zorgt ervoor dat het product een consistente uitstraling en gevoeligheid heeft en bevordert efficiënte en schaalbaarheid.

Met componentenbibliotheken kunnen ontwerpers en ontwikkelaars snel nieuwe functies en pagina's kunnen toevoegen, terwijl de algehele ontwerpconsistentie en kwaliteit behouden blijft. (Quality Assurance!)

- **Hoe zit dit in Sveltekit?:**

Elke `$lib` is in principe een component library.

Het kan ook nog een stapje ingewikkelder. Je kan een externe library aanmaken door middel val npm packages. Dit moét niet, maar het mag.