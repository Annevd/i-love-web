# Learning journal

## Inhoudsopgave

- [Week 1 recap](#week-1-recap)
  - [23/9](#23-9-2024)
  - [24/9](#24-9-2024)
  - [25/9](#25-9-2024)
  - [26/9](#26-9-2024)
  - [27/9](#27-9-2024)
- [Week 2 recap](#week-2-recap)
  - [30/9](#30-9-2024)
  - [1/10](#1-10-2024)
- [Week 3 recap](#week-3-recap)

## Week 1 recap

### 23-9-2024

**Wat heb ik gedaan?:**

Ik ben in de ochtend begonnen met het optimaliseren van mijn project board van sprint 13 en het opstellen van nieuwe leervragen.

 **Wat heb ik geleerd?:**

Een [Jamstack](jamstack.org) bevat 2 groepen technologieën:
- Site generators: bijvoorbeeld Sveltekit
- Headless CMS: bijvoorbeeld Directus

In Sveltekit heb je een [tool](https://kit.svelte.dev/docs/images) die automatisch enhanced images voor je omzet.

- Je bent mentor voor 5/6 eerstejaars studenten (mentorgroep). 
- Je doet dit met 4 studenten uit jouw squad (mentorteam).
- Ik ben mentor van 1G bij Koop.
- Met jouw team zorg je dat er na elke ma/woe/vrij precies één mentor aanwezig is.
- Zorg dat de squadleader jaar 1 weet welke mentoren er op elke dag aanwezig zijn

Je taken bestaan uit:

- Je helpt in een workshop als de studenten een opdracht hebben gekregen
- Je doet code/design reviews op leertaken
- Je beantwoordt vragen over HTML, CSS en JS
- Je geeft in Portflow feedback op reflecties van eerstejaars en bespreekt hun bewijslast

### 24-9-2024

**Wat heb ik gedaan?:**

Ik ben begonnen met onderzoeken hoe ik content uit `markdown` files kan renderen op mijn I love web website met Sveltekit. Hierover heb ik deze bronnen gevonden:

- https://joyofcode.xyz/sveltekit-markdown-blog
- https://www.delphic.top/blog/making_a_blog_website_with_sveltekit
- https://therg.xyz/blog/svelte-kit-blog

Vervolgens hebben ik en mijn projectteam een briefing gehouden met Joost over het project van Bieb in bloei. Hier hebben we de opdracht besproken en andere belangrijke punten. Vervolgens hebben wij als team de debriefing geschreven en opgestuurd naar de opdrachtgever. Aan de hand van de briefing hebben we de opdracht werkzaamheden uitgevoerd waarin we vanuit een epic naar stories gingen, vanuit stories naar user stories en vanuit user stories taken. Deze taken hebben we toen gelijk in het project board verwerkt met daarin labels van de DLC, MoSCoW, en planning poker.

### 25-9-2024

**Wat heb ik gedaan?:**

Ik heb verder uitgezocht hoe ik markdown files kan renderen in mijn I love web blog. Hiervoor heb ik de Sveltekit omgeving opgezet en `marked` en `gray-matter` geïnstalleerd. Ik ben zover gekomen dat de markdown file wel correct gefetched wordt, maar in Svelte nog terugkomt als een empty array.

Tijdens de workshop informatie structuur hebben we met ons team een sitemap gemaakt, op basis daarvan wireframes en daarna een content model.

**Wat heb ik geleerd?:**

Hoe je gestructureerd een content model stap voor stap kan maken.

### 26-9-2024

**Wat heb ik gedaan?:**

Ik heb vandaag uitgebreid gewerkt aan het testen en analyseren van de toegankelijkheidsfuncties op de CMD minor website van Bieb in Bloei. Deze werkte namelijk nog niet optimaal en ben ik dus uitgebreid gaan testen om er achter te komen wat wel en niet werkte. Door daarna te analyseren en dieper op de code in te gaan kon ik gaan nadenken over dingen die beter konden, en waarom sommige dingen wellicht niet werkte. Dit heb ik allemaal gedocumenteerd in de issues: [#125](https://github.com/orgs/fdnd-agency/projects/3/views/1?pane=issue&itemId=80899835) & [#127](https://github.com/orgs/fdnd-agency/projects/3/views/1?pane=issue&itemId=80900181).

### 27-9-2024

**Wat heb ik gedaan?:**

Ik heb vandaag het hoofdstuk Arrays I afgemaakt van learnjavascript.online en gedocumenteerd (Deeltaak JS fundamentals).

Vervolgens hebben ik en mijn team feedback gehad op ons projectboard.

**Feedback:**

Maak met elkaar afspraken wanneer je taken gaat opsplitsen, is een 13 echt 1 taak? Hoe meer effort een taak kost hoe groter je pull request ook wordt. Probeer de taken allemaal een beetje op de 3 en 5 te houden. Dan houden jullie goed overzicht.

### 30-9-2024

**Wat heb ik gedaan?:**

Ik ben vandaag verder gegaan met het opzoeken van inspiratie voor mijn I <3 web blog. Ook ben ik begonnen met het ontwerpen van een grof idee op basis van deze inspiratie.

**Wat heb ik geleerd?:**

Framework projecten hebben vaak een saaie vaste structuur.

In de `src` staat alles wat sveltekit nog moet uitvoeren.
In de `static` staat alles waar sveltekit niks mee doet.

De `lib/server/` dient alleen voor serverside code. Denk aan API keys, of inlogsystemen die niet in de client mogen komen. Deze code mag niét in een `page.js`.

In `routes/` staan je verschillende pagina's. 

Afbeeldingen mogen niet in je library, behalve `svg`'s.

In `.gitignore` staan patronen voor bestanden die niet naar GIT gestuurd worden. Bijvoorbeeld `.env` of `node_modules`.

De `svelte.config.js` is voor de configuratie van Svelte.

De `vite.config.js` is een tool om een project te runnen. Je svelte project is eigenlijk een vite project.
