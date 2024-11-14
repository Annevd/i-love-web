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


## 12-11-2024

### Wat heb ik gedaan?:

Ik heb vandaag gewerkt aan de Component Building Block opdracht. Daarvoor heb ik verschillende ontwerpen gemaakt in figma, deze uitgewerkt tot een breakdownschets en een begin gemaakt aan de code. Ook heb ik een eigen SVG gemaakt die ik hoop te gebruiken voor een animatie wanneer een input valid is.

## 13-11-2024

### Wat heb ik gedaan?
In de ochtend heb ik verder gewerkt aan de opdracht Component Building Block. Hiervoor heb ik valid en invalid states gebouwd. Daarna hadden we de workshop typografie in Web design.

Opdracht: Variable fonts animeren met CSS

1. **Check de fonts die je nu in je project hebt met wakamaifondue.com. Bestudeer de eigenschappen van de fonts: Wat voor fonts gebruik jij in je project? WOFF? WOFF2? Hoeveel KB?**
  In mijn project gebruik ik Poppins, deze heeft geen axis. Ik gebruik een TrueType font type en het is 154 KB. Het font dat ik gebruik op mijn I love web is ook geen variabel font. Het is een OpenType font van 22KB.
2. **Is een van de fonts een variabele font? zo niet, zoek dan een variabele font om mee te animeren. Bv op fonts.google.com**
3. **Analyseer de axis van je gekozen font**
4. **Maak de HTML, laad het font en gebruik de `font-variation-settings` in CSS om het font te animeren**

### Wat heb ik geleerd?
 Web Design is 95% typografie

 Micro-Typography:
 - tracking and Glyph-width
 - Protrusion, margin kerning, or hanging punctuation
 - Punctually increasing or decreasing word space
 - Chunking words through word spacing or other white space

Macro-Typography:
- The Format: the basic dimensions within which we set type
- more...

> A complete collection of web safe CSS font stacks: https://www.cssfontstack.com

**Variabele fonts:**
Variable fonts are an evolution of the Open Type font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a seperate font file for every width, weight, or style. https://variablefonts.io

**Waar bestaat een font uit?:**

Wakamaifondue laat je zien wat er allemaal in een Typeface zit. wakamaifondue.com

https://24ways.org/2019/interactivity-and-animation-with-variable-fonts 

**Modular Scale:**
 A modular scale is a sequence of numbers that relate to one another in a meaningful way. Using the golden ratio, for example, we can produce values for a modular scale by multiplying by 1.618 to arrive at the next highest number, or dividing by 1.618 to arrive at the next number down. Typescale.com

## 14-11-2024

### Wat heb ik gedaan?

Ik heb vandaag de animatie bij valid inputs afgemaakt voor de opdracht Component Building block. Daarnaast heb ik een submission loading/succes state gemaakt met JS. Ook heb ik alvast sommige tests uitgevoerd en voorbereid. Alles staat gedocumenteerd in issues.
