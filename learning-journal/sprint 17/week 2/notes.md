# Inhoudsopgave

- [Week 2 recap](#week-2-recap)
  - [9/12](#9-12-2024)
  - [10/12](#10-12-2024)
  - [11/12](#11-12-2024)
  - [12/12](#12-12-2024)
  - [13/12](#13-12-2024)

# Week 2 recap

## 9-12-2024

### Wat heb ik gedaan?:

s'Ochtends heb ik weer portflow ingevuld. Daarna heb ik nog een pull request aangemaakt voor een issue voor bieb in bloei.
Daarna hadden we de **Workshop Creative coding spike 2**.

### Wat heb ik geleerd?:

**View transitions:**
- Cross-document:

```CSS
/* CSS only, voor normale <a href> links */
@media(prefers-reduced-motion: no-preference) {
  @view-transition {
    navigation: auto;
  }
}
```

- Same-document:
```JS
// Met JS, voor (micro-)interacties op de pagina zelf
documnet.startViewTransition
```
```JS
b.addEventListener('click', function() {
  if (document.startViewTransition) {
    document.startViewTransition(toggleActiveState)
  } else {
    toggleActiveState()
    }
})

function toggleActiveState() {
  d.classList.toggle('active')
}
```

Als je daarna in de CSS `animation-name` gebruikt, krijgt het automatisch ook een cross-translate tussen 2 states.

```CSS
::view-transition-group(vet-dingetje){
  animation-duration: 1s;
}
```

## 10-12-2024

### Wat heb ik gedaan?:

Ik heb vandaag de eerste versie van mijn crazy retro line art gebouwd en live gezet. Er zijn nog een paar issues die ik hiervoor moet oplossen zoals en delay, en z-index.
Verder heb ik `localStorage` toegepast op de bieb in bloei website.
