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


## 11-12-2024

### Wat heb ik gedaan?:

Mentor in de ochtend, in de middag de workshop Kleur in Web design.

### Wat heb ik geleerd?:

#### Kleur in Web Design: Inspiratie
- [Blend modes](https://css-tricks.com/basics-css-blend-modes/)

![image](https://github.com/user-attachments/assets/d1f9c5c6-66d0-4fe3-94b2-35dd2c7ea58e)
- [Grainy gradients](https://css-tricks.com/grainy-gradients/)

![image](https://github.com/user-attachments/assets/d5b60de3-2145-4ce8-ad24-a8a0f272b37e)

- [The state of changing gradients with CSS transitions and animations](https://css-tricks.com/the-state-of-changing-gradients-with-css-transitions-and-animations/)
- [Split effects with no content duplication](https://frontendmasters.com/blog/split-effects-with-no-content-duplication/)
- [Coloring with code](https://tympanus.net/codrops/2021/12/07/coloring-with-code-a-programmatic-approach-to-design/)


## 12-12-2024

### Wat heb ik gedaan?:

Ik heb de 2de creative coding spike opdracht afgerond, portflow deels ingevuld, en aan Javascript fundamentals gewerkt.

## 13-12-2024

### Wat heb ik gedaan?:

- Code/design review
