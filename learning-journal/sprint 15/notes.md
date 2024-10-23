# Inhoudsopgave

- [Week 1 recap](#week-1-recap)
  - [14/10](#14-10-2024)
  - [15/10](#15-10-2024)
  - [16/10](#16-10-2024)
  - [17/10](#17-10-2024)
  - [18/10](#18-10-2024)
- [Week 2 recap](#week-2-recap)
  - [21/10](#21-10-2024)
  - [22/10](#22-10-2024)
  - [23/10](#23-10-2024)
  - [24/10](#24-10-2024)
  - [25/10](#25-10-2024)


# Week 1 recap

## 14-10-2024

### Wat heb ik gedaan?:

In de ochtend heb ik weer mijn portflow bijgevuld.

**Sprintplanning sprint 15- Choices, choises:**

Deze sprint gaan we keuzes maken voor een nieuwe tech stack, en wellicht wel voor een stage.
Zonder portfolio geen stage!

- Tijdens deze sprint: 
    - Onderzoek je een nieuwe techstack voor het ontwerpen en bouwen van een website voor een opdrachtgever
    - Verantwoord en presenteer je jouw gemaakte keuze
    - Neem je de mentorrol in de jaar 1 tribe serieus

- Onderweg naar de midterm:
    - Heb je meesterproef en vrije ruimte al?
    - Je bewijst 12 van de 15 indicatoren

- Vrije ruimte:
    - [Informatie over vrije ruimte](https://dlo.mijnhva.nl/d2l/le/content/611023/Home)
    - Je kan 10 weken of 20 weken stage lopen. Loop je 20 weken? dan doe je je meesterproef bij je stage bedrijf
    - Wil je een andere FDMCI Ad volgen ? ga zsm naar Justus
    - Je kan ook een schakelprogramma doen naar CMD, denk hier wel aan dat sommige indicatoren hier niet haalbaar zijn
    - Ook kun je FDND-Agency gaan doen, meer eigen verantwoording, je brengt de websites naar publicatiegereedheid
    - Bewijslast voor midterm en endterm is volledig jouw verantwoordelijkheid

- Tech-stack:
    - React is handig om te kennen, er is veel werkgelegenheid in
    - Set aan tooling om je website aan te bieden:
        - Op de client is dat: HTML, JS, CSS, Library
        - De Middleware: CMS:users, API
        - Op de Server: NodeJS, Database, Framework
    - Factors for choosing a tech-stack:
        - Platform
        - Project type
        - Scalability
        - Performace
        - Team Experience: zijn er alleen maar ervaren devs? heb je een opdrachtgever die niks van de techniek snapt?
        - Maintenance: is er een team? of doe je zelf het onderhoud?
        - Cost: wat zijn de kosten? 
        - Size: werk je in je eentje of met een groot team in kleine stukjes?
    - User Experience, Developer Experience, Development principles
    - De combinatie van user experience, content-management-experience én developer-experience wegen mee bij de keuze voor een tech-stack
    - Wij gebruiken Site generators van Jamstack.org, filter op 'Javascript' geeft nog 133 generatoren die je zou kunnen kiezen...
    - Optioneel kun je een ander headless CMS kiezen

**Opdracht: The tech-stack**
- Kies een nieuwe tech-stack voor het ontwerpen en bouwen van een website voor een opdrachtgever. Werk aan dezelfde epic als in sprint 14, maar dan met een ander framework en/of headless CMS en/of andere tooling. Presenteer jouw bevindingen aan je team.

Ik heb het framework Astro gekozen. Hierin zou ik als ik tijd heb nog een extra framework kunnen gebruiken zoals React, Preact, Svelte, Vue, Solid, Lit, HTMX.

### Wat heb ik geleerd?:

**[Astro basics](https://docs.astro.build/en/getting-started/):**

Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks. If you need a website that loads fast and has great SEO, then Astro is for you.

**Features:**

Astro is an all-in-one web framework. It includes everything you need to create a website, built-in. There are also hundreds of different integrations and API hooks available to customize a project to your exact use case and needs.

- Some highlights include:
    - **Islands**: A component-based web architecture optimized for content-driven websites.
    - **UI-agnostic**: Supports React, Preact, Svelte, Vue, Solid, Lit, HTMX, web components, and more.
    - **Server-first**: Moves expensive rendering off of your visitors’ devices.
    - **Zero JS, by default**: Less client-side JavaScript to slow your site down.
    - **Content collections**: Organize, validate, and provide TypeScript type-safety for your Markdown content.
    - **Customizable**: Tailwind, MDX, and hundreds of integrations to choose from.

**Design Principles:**

Here are five core design principles to help explain why we built Astro, the problems that it exists to solve, and why Astro may be the best choice for your project or team.

- Astro is…
    - **Content-driven**: Astro was designed to showcase your content.
    - **Server-first**: Websites run faster when they render HTML on the server.
    - **Fast by default**: It should be impossible to build a slow website in Astro.
    - **Easy to use**: You don’t need to be an expert to build something with Astro.
    - **Developer-focused**: You should have the resources you need to be successful.

[Back to top](#inhoudsopgave)

## 15-10-2024

### Wat heb ik gedaan?:

Ik heb tot ongeveer 13:30 tijd besteed aan het volgen van de volledige [Astro tutorial](https://docs.astro.build/en/tutorial/0-introduction/) om grip te krijgen op het framework. De rest van de dag heb ik geprobeerd om de stekjes pagina en de stekjes/slug pagina te herbouwen in Astro. Dit verloopt nog niet helemaal vlekkenloos, ik krijg namelijk enorm veel typescript errors, maar er staat in ieder geval wat.

### Wat heb ik geleerd?:

**How to start a new Astro project:**
- Run the following command in your terminal to start our handy install wizard: `npm create astro@latest`
- Confirm `y` to install `create-astro`
- When the prompt asks, “Where would you like to create your new project?” type in the name of a folder to create a new directory for your project, e.g. `./tutorial`
- You will see a short list of starter templates to choose from. Use the arrow keys (up and down) to navigate to the “Empty” template, and then press return (enter) to submit your choice.
- When the prompt asks you if you plan on writing TypeScript, type `n`.
- When the prompt asks, “Would you like to install dependencies?” type `y`.
- When the prompt asks, “Would you like to initialize a new git repository?” type `y`.
- `cd` into your new project directory to begin using Astro
- If you skipped the “Install dependencies?” step during the CLI wizard, then be sure to install your dependencies before continuing.
- You can now start the Astro dev server and see a live preview of your project while you build!: `npm run dev`

**How to deploy yout Astro Project with Netlify:**
1. Click Add a new site in your Netlify dashboard
2. Choose Import an existing project
3. When you import your Astro repository from your Git provider, Netlify should automatically detect and pre-fill the correct configuration settings for you.
4. Make sure that the following settings are entered, then press the Deploy button:
  - Build Command: `astro build` or `npm run build`
  - Publish directory: `dist`

After deploying, you will be redirected to the site overview page. There, you can edit the details of your site.

[Introductory tutorial](https://docs.astro.build/en/tutorial/0-introduction/)

**Astro project structure:**
Every Astro project root should include the following directories and files:

- `src/*` - Your project source code (components, pages, styles, etc.)
- `public/*` - Your non-code, unprocessed assets (fonts, icons, etc.)
- `package.json` - A project manifest.
- `astro.config.mjs` - An Astro configuration file. (recommended)
- `tsconfig.json` - A TypeScript configuration file. (recommended)

**Example Project Tree:**
A common Astro project directory might look like this:

![image](https://github.com/user-attachments/assets/3dbe722b-3ebe-4daa-bcd8-49f36f8ea4a5)

- `src`: The src/ folder is where most of your project source code lives. This includes:
  - Pages
  - Layouts
  - Astro components
  - UI framework components (React, etc.)
  - Styles (CSS, Sass)
  - Markdown

- `src/pages`: Pages routes are created for your site by adding supported file types to this directory.
- `src/components`: Components are reusable units of code for your HTML pages. These could be Astro components, or UI framework components like React or Vue. It is common to group and organize all of your project components together in this folder.
- `src/content`: The `src/content/` directory is reserved to store content collections and a configuration file. No other files are allowed inside this folder.
- `src/layouts`: Layouts are Astro components that define the UI structure shared by one or more pages.
- `src/styles`: It is a common convention to store your CSS or Sass files in a `src/styles` directory, but this is not required. As long as your styles live somewhere in the `src/` directory and are imported correctly, Astro will handle and optimize them.
- `public/`: The `public/` directory is for files and assets in your project that do not need to be processed during Astro’s build process. The files in this folder will be copied into the build folder untouched, and then your site will be built.
This behavior makes `public/` ideal for common assets like images and fonts, or special files such as `robots.txt` and `manifest.webmanifest`.
- `package.json`: This is a file used by JavaScript package managers to manage your dependencies. It also defines the scripts that are commonly used to run Astro (ex: `npm start, npm run build`).
There are two kinds of dependencies you can specify in a `package.json`: dependencies and devDependencies. In most cases, these work the same: Astro needs all dependencies at build time, and your package manager will install both. We recommend putting all of your dependencies in dependencies to start, and only use devDependencies if you find a specific need to do so.
- `astro.config.mjs`: This file is generated in every starter template and includes configuration options for your Astro project. Here you can specify integrations to use, build options, server options, and more.
Astro supports several file formats for its JavaScript configuration file: `astro.config.js, astro.config.mjs, astro.config.cjs and astro.config.ts`. We recommend using `.mjs` in most cases or `.ts` if you want to write TypeScript in your config file.
- `tsconfig.json`: This file is generated in every starter template and includes TypeScript configuration options for your Astro project. Some features (like npm package imports) aren’t fully supported in the editor without a `tsconfig.json` file.
- 
[Back to top](#inhoudsopgave)

## 16-10-2024

### Wat heb ik gedaan?:
In de ochtend ben ik mentor geweest bij de eerstejaars, en heb ik feedback gegeven op hun portflow communiceren.

### Wat heb ik geleerd?:
Kevin van Directus en Shyanta van Triple kwamen een presentatie geven:

### Directus

- Back-end with customizable UI.
- It's designed to help you go quicker.

**His role:**
- Developer Experience
- Looking after community engagement
- Making sure key extensions are being built, and that the capabilities are meeting the needs of the Directus developers
- He works in a team of 5 people

**How they make money:**
- Directus cloud: hosting for you
- Their liscense is not an OS approved liscense
- Professional services
- Directus plus: subscription service
- Market place: app store for example

**Tradeoffs:**
- The Iron Triangle: weighing the opposing forces of quality, speed and cost against each other. You can always only choose 2.

**Perfectionism:**
- Delivering in a timely fashion or wanting to deliver perfection

**Tech stack selection:**
- Whats the best option

**Design systems:**
- UI / UX
- Already made components

**Performance VS maintainability:**
- How many users are gonna use it
- Everything is gonna cost
- Directus focuses on performance

**Velocity vs flexibility:**
- Velocity: how fast can you build something?

**Innovation vs reliability:**

**Artificial Intelligence**
- Tradeoff of ethics
- You could say its theft
- Costs: money & environmental
- Accuracy

**Cost-benefit analysis**

**Swot analysis**

**Weighted decision matrix**

- **The tech you use probably doesn't matter**
- **You're going to make shitty decisions**
- **Root decisions in user needs**

**Imposter syndrome:**
- How do you get over it:
  - [yougotthis](https://yougotthis.io/): collection of videos about core/soft skills
  - Usually people who don't have imposter symdrome, aren't good.

- [Directus academy](https://directus.io/tv/directus-academy)


[Back to top](#inhoudsopgave)

## 17-10-2024

### Wat heb ik gedaan?:

Ik heb vandaag verder gewerkt aan mijn I love web site.

[Back to top](#inhoudsopgave)

## 18-10-2024

### Wat heb ik gedaan?:
Ik heb vandaag mijn tech-stack code gedocumenteerd, een we-love-web bezocht en een code/design review gehouden. Daarna heb ik met Eva onze ervaring gedeeld van Astro en ben ik nog even verder gegaan aan de tech-stack code.

# Week 2 recap

## 21-10-2024

### Wat heb ik gedaan?:

Ik heb in de ochtend weer gewerkt aan me portfolio. Daarna hadden we een workshop Visual Thinking en een workshop Teamlead.

### Wat heb ik geleerd?:

**Mentoring Do's:**
- Weet waar de les over gaat, zodat je actief mee kan doen
- Pro actieve houding, vragen stellen, erbij gaan zitten
- Vragen met een tegenvraag beantwoorden, mensen op weg helpen naar het antwoord zonder het voor te kauwen
- Bewust informatie doseren, neem niveau mee in feedback in geedback geven. Constructieve feedback. Houd het klein.
- Feedback in issues schrijven maar ook mondeling uitleggen. Geef ook een bron mee
- Communiceren over planning met docenten
- Kijk naar mentor planning, letten op diversiteit. Let op samenstelling van de mentoren
- Sandwichmethode van feedbackgeven: Tip, top, tip
- Als mentor hoef je niet alles te weten, je kunt samen op zoek gaan naar het antwoord
- Feedback vragen aan studenten over het mentoren

**Mentoring Don'ts:**
- Te streng zijn
- Afdwalen en op teveel feedback geven
- Lang wegblijven en niet de halve les wegblijven
- Niet aanwezig / te laat komen
- Mensen afkraken
- Niet geïrriteerd reageren

[Back to top](#inhoudsopgave)

## 22-10-2024

### Wat heb ik gedaan?

Ik heb mijn praatplaat voor de opdracht schets-je-ontwikkeling afgemaakt en gedocumenteerd in de README. Vervolgens heb ik de hele dag gewerkt aan het testen en onderzoeken van mijn tech-stack, en hier argumenten voor te formuleren.

## 23-10-2024

### Wat heb ik gedaan?

Ik heb in de ochtend mijn argumentatie opdracht afgemaakt (argumentatieschema + uitwerking). Daarna hadden we een stagemarkt waar ik gesproken heb met mensen van AskPhil, 27Degrees, The Valley en Triple.

Waar je op moet letten voor je Github wanneer je solliciteert:

- Belangrijkste repo's pinnen bovenaan je profiel
- Snel door de code heen
- ReadMe moeten netjes zijn
- Altijd een Live demo!
- Waarom heb je een website gebouwd? (waarom dit waarom dat waarom zus waarom zo)

