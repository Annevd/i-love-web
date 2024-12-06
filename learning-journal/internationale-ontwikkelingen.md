# Gevolgde bronnen
- [CSS Weekly newsletter](https://css-weekly.com/)
- [Frontend Focus newsletter](https://frontendfoc.us/issues)
- [Awwwards](https://www.awwwards.com/)
- [Medium Frontend Weekly](https://medium.com/front-end-weekly)
- [Scroll driven animations](https://scroll-driven-animations.style/)
- [30secs of knowledge - chrome extensie](https://www.30secondsofknowledge.com/)
- [Daily.dev - chrome extensie](https://daily.dev/)
- Instagram accounts:
- <img width=200 src="https://github.com/user-attachments/assets/d605c595-7d99-438a-85e6-74648b5a567a">

# Notes

**Inhoudsopgave:**

- [Awwwards](#awwwards)
- [Medium Frontend Weekly](#medium-frontend-weekly)
- [Frontend Focus](#frontend-focus)
- [CSS Weekly](#css-weekly)
- [30 Seconds of Knowledge](#30-seconds-of-knowledge)

---

## Awwwards

- Cool sticky animation: https://www.awwwards.com/inspiration/footer-animation-a-chen-web-designer-of-wei-lai-jie
- Super cool page transition: https://www.awwwards.com/inspiration/page-transition-4
- Gallery wall inspiration: https://www.awwwards.com/inspiration/the-message-to-ukraine-postcard-gallery-wall
- Interactive infinite gallery: https://www.awwwards.com/inspiration/francobolli-monti-lessini-infinite-gallery-francobolli-monti-lessini

#### Spotlight

- [Mew](https://mew.xyz/)
  - Insanely creative transitions, animations, style, everything!!!! 

![image](https://github.com/user-attachments/assets/16a70628-1574-498e-a3ec-b21de00b81e7)

- [MadeByAnalogue](https://madebyanalogue.co.uk/)
  - Super cool style

![image](https://github.com/user-attachments/assets/44060685-1a62-448f-b4b6-550373e51ddd)
![image](https://github.com/user-attachments/assets/7a132d1e-55e2-45c3-8f83-0e3bc2812115)

---
## Medium Frontend Weekly

- [CSS: light-dark()](https://medium.com/front-end-weekly/forget-javascript-achieve-dark-mode-effortlessly-with-brand-new-css-function-light-dark-2024-94981c61756b)

  Je kan nu heel makkelijk light/dark modes bepalen door middel van `light-dark()` in CSS, op basis van de user prefered thema. Hiervoor hoef je geen `perfers-color-scheme` blocks meer te schrijven, maar kan je het simpelweg in de custom properties of elementen zelf zetten.

  [Mdn bron](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)

---
## Frontend Focus

- [UI fonts: Test and preview fonts in real-time for all your design needs](https://www.uifonts.app/)

---
## CSS Weekly

- [Overflow: clip](https://ishadeed.com/article/overflow-clip/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-599-november-20-2024&_bhlid=71db572afb9149abeee0ca0ae97ae111815fc307)

`overflow:clip` is super handig om te gebruiken wanneer maar één axis geclipped moet worden.

**Bijvoorbeeld:**

<img height=300 src="https://github.com/user-attachments/assets/261651d9-1d67-4d75-af98-e7a016e5e775">
<img height=300 src="https://github.com/user-attachments/assets/18b5c256-ee8c-444a-8171-ef24ac4c6078">

---
- [Popover with Anchor positioning](https://www.youtube.com/watch?v=DNXEORSk4GU)

Met anchor positioning kan je heel makkelijk een popover plaatsen "anchored" aan een element. In deze video legt Kevin Powell uit hoe dat werkt, en hoe je er voor zorgt dat het op alle browsers werkt.

<img width=900 src="https://github.com/user-attachments/assets/3041ec3e-e432-4179-9f27-8eafc283bc18">

---

- [Super toffe sunlit animatie met CSS](https://github.com/jackyzha0/sunlit?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-600-november-27-2024&_bhlid=a1b859cec72f42b942751604bdcb216e31c8db74)

<img width=900 src="https://github.com/user-attachments/assets/2584a43d-d801-41e5-91b8-fc78d706b2bc">

---

## 30 Seconds of Knowledge

### What is the difference between the array methods `map()` and `forEach()`?

**Answer:**

Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.

**Good to hear:**

- Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.
- `map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.
  
**Additional links:**
- [MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)

---

### Create a descending list of numbered items in HTML

Did you know there's an easy way to create a descending list of numbered items with pure HTML? The only thing you'll need is the `reversed` attribute. This boolean attribute is specific to `ol` elements and specifies that the list's elements are in reverse order (i.e. numbered from high to low).
```HTML
<ol reversed>
  <li>My third favorite</li>
  <li>My second favorite</li>
  <li>My absolute favorite</li>
</ol>
<!--
  3. My third favorite
  2. My second favorite
  1. My absolute favorite
-->
```
Additionally, you can combine reversed with the start attribute which is an integer specifying the initial value of the list counter. For example, if you wanted to display the numbers 6 through 4 in a reversed 3-item list, you would simply add `start="6"`.

## Overige inspiratie
- https://www.wix.com/studio/blog/scrollytelling
- https://www.niccolomiranda.com/work
![image](https://github.com/user-attachments/assets/25dc20a4-a682-4031-a2b3-33b9bcfa2d53)
![image](https://github.com/user-attachments/assets/a6e0d4a2-bd24-4e06-8ab6-0ed298b5c755)
- https://tympanus.net/Development/KineticTypePageTransition/
![image](https://github.com/user-attachments/assets/d9c6986b-c903-4a4f-9000-75ed78cfa1ae)
![image](https://github.com/user-attachments/assets/139b8720-b51c-4337-93ca-15e732229c55)

- [Grainy Gradients](https://css-tricks.com/grainy-gradients/)
- [snapsvg](http://snapsvg.io/start/)
