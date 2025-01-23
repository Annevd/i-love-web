# Inhoudsopgave

- [Week 3 recap](#week-3-recap)
  - [20/01](#20-01-2025)
  - [21/01](#21-01-2025)
  - [22/01](#22-01-2025)
  - [23/01](#23-01-2025)
  - [24/01](#24-01-2025)
  - [Sprintplanning vrije ruimte](#sprintplanning-vrije-ruimte)

# Week 3 recap

## 20-01-2025

### Wat heb ik gedaan?:

Gewerkt aan Bieb in Bloei.

### Wat heb ik geleerd?:

#### Sprintplanning vrije ruimte

  - **4.2.2:** "Ik schat in dat ik dit aankomende donderdag af heb" bij je teamlead.
  - **4.3.1:** "Kun je het nog een keer uitleggen/in andere woorden, ik begrijp het niet helemaal"
  - **4.3.3:** Documenteer volgens de standaarden van het bedrijf.
  - **4.4.1:** Waarom kies je ergens voor? Daarna toets je of dit de juiste keuze was.
  - **4.5.1:** Ook zelf websites in de gaten houden, smashing, etc.
  - **4.5.3:** Schiet je ergens tekort? Vraag om die ruimte om skills eigen te maken.

- **Portflow:**

Nodig je bedrijfsbegeleider uit voor feedback op relevante bewijslast, vraag feedback tijdens je stage en tijdens terug-kom-dagen.

  - **Template:** SFGRZW9

  - **Belangrijke data:**
    - Vrijdag 07/03: We love web + Terugkomdag waarop je aan de Tribe presenteert waar je mee bezig bent, van 14:00-17:00
    - Vrijdag 28/03: We love web + Terugkomdag waarop je aan de Tribe presenteert waar je mee bezig bent, van 14:00-17:00 (deadline portflow zondag 30/3 23:59)
    - Assessment

---

#### WebGL/ThreeJS/Shaders

- **ThreeJS:** is een JS library dat het werken met 3D in de browser eenvoudig maakt. Het gebruikt WebGL.

**ThreeJS bestaat uit 3 kernonderdelen:**
1. Scene - de wereld waarin de 3d objecten zich bevindne
2. Camera - de camera waarmee je naar de 3d objecten kijkt (het oogpunt)
3. Renderer - het systeem dat alles tekent

**Basis code:**
```JS
// 1. Maak een scene

// 2. Maak een camera

  // Perspective (P) vs Orthographic projection (O)
  // Bij perspective zullen 2 objecten met verschillende afstanden verschillende groottes hebben (perspectief)
  // Bij Orthographic zullen die 2 objecten dezelfde grootte krijgen, ongeacht afstand. Alles wordt plat.

// 3. Maak een renderer

// 4. Voeg een object toe (bijv. een kubus)

// 5. Plaats de camera

// 6. Maak een animatielus
```

- **Mesh(es):**
  - Geometry
    - SpehereGeometry
    - PlaneGeometry
  - (+) Material
    - RawShaderMaterial
    - VertexShader
    - FragmentShader
  - = mesh
 
- **Light('s):**
  - Shadows
  - Materials
    - MeshPhongMaterial
    - MeshLambertMaterial
  -   LightColors
    - Hue (?)
    - Ikea Home Lights (?)
 
- **Vertex Shader:**
  De vertex shader is een stukje code dat draait op de GPU en is verantwoordelijk voor het transformen van de coördinaten van een object naar de uiteindelijke positie op je scherm. Het berkent de x, z, en y positie van elk puntje uit het wireframe.

De fragment shader berekent...

- [Coole iglo met webGL](igloo.inc)
- [Bestuurbaar portfolio met WebGL](bruno-simon.com)
- [Gratis threeJS lessen ](threejs-journey.com)
- [Bestuurbare website met webGL](summer-afternoon.vlucendo.com)
- [WebGL Image Transitions](tympanus.net/Development)
- [Codrops tutorials](https://tympanus.net/codrops/category/tutorials/)
- [Spector.js Chrome extension](https://chromewebstore.google.com/detail/spectorjs/denbgaamihkadbghdceggmchnflmhpmk)
- [Informatie over shaders](thebookofshaders.com)

3D modellen (obj files) kun je gewoon gratis op het internet vinden.

---


## 21-01-2025

### Wat heb ik gedaan?:

Ik ben bezig geweest met portflow en het verwerken van issues voor Bieb in Bloei.

---

## 22-01-2025

### Wat heb ik gedaan?:

### Wat heb ik geleerd?:

> Van offerte tot oplevering

Hoe kom je aan projecten?: Netwerken

- **Wat wil de opdrachtgever (nou echt)?**
- Briefing
- Verwachtingen
- Wat kan jij, wat kan ik
- Nee zeggen, wil ik dat wel?

- **Wat staat er in een offerte?**
1. Wat ga je doen
2. Begroting
3. Planning & afspraken
4. Algemene voorwaarden
5. Of je feedbackrondes aan wil bieden (bij design heavy opdrachten)

The GOOD list: heeft een rapport elk jaar van uurtariefen voor verschillende functies (zoals creative developer, dit is voor freelance)
Als je een freelancer bent, moet je je eigen pension regelen, je eigen arbeidongelukkenverzekering, eigen inkomstenbelasting etc.

De prijs per uur die je vraagt hangt ook af van de branche, in de culturele sector vraag je bijvoorbeeld minder, en in de commerciele branche meer.

- **Na de offerte:**

Soms krijg je een design, soms ontwerp je zelf:
- Grove schetsen laten zien
- Daarna high-fi
- Dan snel bouwen
- Design changes on the way

Bouwen, bouwen bouwen:
- Fundering, data model
- Framework kiezen
- CMS? zeker doen
- Testen
- Acceptatie omgeving opzetten (omgeving die de klant ook kan zien, bijvoorbeeld _release candidate_)(productieomgeving is waar het live staat voor iedereen, bijvoorbeeld _main_)

Feestje & Money time:
- Ga nooit live op een vrijdag
- Afspraken over oplevering
- Garantie, bug fixing
- Factuur sturen

Service Level Agreement:
- Maak afspraken voor na de oplevering:
  - Hostingkosten? Updates?
  - Maandelijkse vaste uren?
  - Nacalculatie? 

Opdrachtje: https://github.com/fdnd-task/release-candidate/blob/main/docs/feature-request.md

---

## 23-01-2025

### Wat heb ik gedaan?:

Ik heb een `contributing.md` gemaakt, oude branches verwijderd, kampvuursessie ingevuld en portflow afgerond.
