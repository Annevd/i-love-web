# Inhoudsopgave

  - [Algemene informatie](#algemene-informatie)
  - [GIT & Bitbucket](#git--bitbucket)
  - [3/02](#3-februari-2025)
  - [4/02](#4-februari-2025)
  - [5/02](#5-februari-2025)
  - [6/02](#6-februari-2025)
  - [7/02](#7-februari-2025)

### Algemene Informatie

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

---

## 3 februari 2025

Vandaag was de eerste Stage dag bij US Media! Hier heb ik een onboarding gehad waar ik uitleg kreeg over alle algemene informatie wat betreft het bedrijf, de tools en de teams. Ook heb ik kennis gemaakt met verschillende developers en hebben we elkaars skills besproken.

