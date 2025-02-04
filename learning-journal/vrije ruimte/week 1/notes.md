# Inhoudsopgave

  - [Algemene informatie](#algemene-informatie)
  - [GIT & Bitbucket](#git--bitbucket)
  - [Formulieren API](#formulieren-api)
  - [3/02](#3-februari-2025)
  - [4/02](#4-februari-2025)
  - [5/02](#5-februari-2025)
  - [6/02](#6-februari-2025)
  - [7/02](#7-februari-2025)

## Algemene Informatie

#### Wekelijkse meetings:
  - Elke dag:
    - 9:15: Daily standup (US Media)
    - Project team standup (Team)
  - Elke vrijdag:
    - 16:30 US Presents 
  - Elke 3 weken:
    - 9:30 CLOMP Team standup
    - 15:00 Voorbereiding CLOMP voor vlg week

**Daily standup:**
- Korte samenvatting van de vorige werkdag
- Wat ga je vandaag doen?
- Zijn er nog “roadblocks”?
- Is er nog iets “te vieren”?

**Daily projectteam standup:**
- Specifieker de tasks bespreken
- Waar loop je tegen aan?

**CLOMP voorbereiding:**
- Wat gaan we doen? Wat staat er?
- Inschatten
- Toetsen (haalbaar?)
- Verdelen

#### Tools:

**Communicatie & planning:**
  - Slack
  - Gmail
  - Google meet
  - Google drive
  - Planningsbord
  - Forecast: online planning
**Productiviteit:**
  - Linear: agile project management tool
  - Youtrack: tickets systeem voor service en planningsbord (klanten zitten hier ook in)
  - BitBucket: GIT
  - Sonarcloud: code kwaliteit analyse
  - Keyring: wachtwoorden manager
  - Slite: de US wiki

#### Tech stacks:

  - Back-end:
    - Angular
    - NestJS
    - NodeJS
  - CMS:
    - Wordpress, PHP based
    - Contentful, NodeJs
  - Front-end:
    - HTML5/CSS3
    - Javascript/Typescript
    - Progressive Web App Standards
    - JSON/Rest API’s

---

## GIT & Bitbucket

We use git to manage our code and Bitbucket as our version control manager.

### Workflow
We use a workflow which is similar to the Git workflow. Usually you create a feature or hotfix branch from master. The `master` branch usually is the branch that is on production/live. We branch from master so features can be released separately. You can only push to develop and master via a pull request.

### Naming of branches.
Use either `hotfix/` or `feature/`, depending on the type of issue or project. For some flows we also use `release/`  (see deployments a bit further down). If it's an issue from Youtrack use the issue nr as the branch name. For instance `hotfix/SDN-1745`. When you're done fixing your bug or creating your feature, you create a pull request to develop. You can add a reviewer so another developer can check your code. Once the Pull Request is merged it starts a pipeline.

We use git to add, commit, push etc.  If you don't know how to do this, you can do this online training, it won't take that long.

### Deployment & Pipelines

We use bitbucket pipelines to trigger build, scan and deployment processes.
For some projects (mostly SIDN projects) we use bitbucket deployments to deploy our code. For other projects we use a simpler deployments process. "Develop" get build and deployed to Staging. "Master" gets build and deployed to Production/Live. Sometimes there's also an Accept branch which get build and deployed to Accept. For this way of deployment the code gets build anew for every environment.

- [Handige site om GIT basics te leren](https://learngitbranching.js.org/)
  
---

## Formulieren API

**API:** Communiceren tussen de frontend en backend servers

Bijvoorbeeld postcode.nl

**REST API:** Hoe definieer je de endpoints (url waar tegen je praat)

[staging.api.terredeshommes.nl/docs](staging.api.terredeshommes.nl/docs) voor documentatie over een API van Terredeshommes.

Met SQL kan je data uit een database halen.

Een _ORM_ creëert een "virtuele object-database" die de developer kan gebruiken om gegevens op te halen, te wijzigen of te verwijderen, alsof het objecten in het programma zelf zijn. Hierdoor hoeft de developer zich geen zorgen te maken over het schrijven van SQL-queries of het omgaan met verbindingsproblemen met de database. Het stelt developers in staat om objecten rechtstreeks te koppelen aan hun bijbehorende databasegegevens, en vice versa.

- **Authenticatie:** Wie ben je?
- **Authorisatie:** Waar mag je bij?

Als gebruiker schiet jij als het ware een "submission" in.

**Salesforce API:** stel er is een nieuwe submissie met x bedrag en y banknummer, dan wordt het pakketje met deze informatie daarna op de achtergrond naar salesforce gestuurd.

**Tasks:** met een task runt in de achtergrond, die voor een backup/fallback zorgt. Stel dat salesforce het niet doet, dan kan je zelf instellen het ie het bijvoorbeeld nog x aantal probeert, maar dat het proces in ieder geval doorgaat. (dit werkt in de cloud)

**Brevo:** de emailpartner

**Docker:** draait op je windows. Docker kan andere kleinere operating systems draaien los van elkaar. De database wordt dan opgezet in een docker container. Wordpress kan ook in een docker container. Het is een soort "virtueel operating system".

**Linter:** een linter checkt je code tegen de standaard. Checkt op structuur, lege regels, indentation , etc.

Het geautomatiseerd runnen van processen en tools noem je een pipeline.

**Javascript VS Typescript:** Typescript is Javascript maar met allemaal types er over heen die je moet definiëren. Ze doen hetzelfde.

**Sonar:** onderdeel van de pipeline die je code controleert op fouten. Regels binnen code standaarden zoals waarschuwing tegen vreemde functies, security vulnerabilities.

Staging is de testversie van de website. Production staat live voor iedereen.

### Lijst met genoemde termen

- AWS / Google / Infra
- REST / Swagger docs
- SQL / Database / Migration SQL vs NoSQL
- Mikro ORM
- Docker / Pipelines 
- NPM / Linters
- Sonar
- HTTP request
- Authenticate /  Authorize
- Forms
- Submissions
- Tasks
- Salesforce
- Brevo


---
## 3 februari 2025

Vandaag was de eerste Stage dag bij US Media! Hier heb ik een onboarding gehad waar ik uitleg kreeg over alle algemene informatie wat betreft het bedrijf, de tools en de teams. Ook heb ik kennis gemaakt met verschillende developers en hebben we elkaars skills besproken.

Verder heb ik de US media wiki doorgespit en aantekeningen gemaakt van belangrijke dingen.

