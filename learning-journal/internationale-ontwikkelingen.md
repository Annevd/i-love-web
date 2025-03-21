# Gevolgde bronnen
- [CSS Weekly newsletter](https://css-weekly.com/)
- [Frontend Focus newsletter](https://frontendfoc.us/issues)
- [Awwwards](https://www.awwwards.com/)
- [Medium Frontend Weekly](https://medium.com/front-end-weekly)
- [Scroll driven animations](https://scroll-driven-animations.style/)
- [30secs of knowledge - chrome extensie](https://www.30secondsofknowledge.com/)
- [Daily.dev - chrome extensie](https://daily.dev/)
- Instagram accounts:

    <img width=200 src="https://github.com/user-attachments/assets/d605c595-7d99-438a-85e6-74648b5a567a">

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
- Vette loading animation & glass shards effect: https://insidekristallnacht.org/

#### Spotlight

- [Mew](https://mew.xyz/)
  - Insanely creative transitions, animations, style, everything!!!! 

![image](https://github.com/user-attachments/assets/16a70628-1574-498e-a3ec-b21de00b81e7)

- [MadeByAnalogue](https://madebyanalogue.co.uk/)
  - Super cool style

![image](https://github.com/user-attachments/assets/44060685-1a62-448f-b4b6-550373e51ddd)
![image](https://github.com/user-attachments/assets/7a132d1e-55e2-45c3-8f83-0e3bc2812115)

- [Spencer Gabor](https://spencergabor.work/)
  - I like the minimalist yet colorful and bold design
 
![image](https://github.com/user-attachments/assets/b1015e83-dcb7-4d57-b424-20ee7db9d1b7)

- [Neovision](https://neovision.dev/)
  - De border om de website heen, de cut-out designs en oversized cursor zijn echt top

![{06F4B59D-60E7-4E27-8612-28DB0745F5EE}](https://github.com/user-attachments/assets/44a5fabc-16b4-4a19-ae43-4066bb7d4796)

---
## Medium Frontend Weekly

- [CSS: light-dark()](https://medium.com/front-end-weekly/forget-javascript-achieve-dark-mode-effortlessly-with-brand-new-css-function-light-dark-2024-94981c61756b)

  Je kan nu heel makkelijk light/dark modes bepalen door middel van `light-dark()` in CSS, op basis van de user prefered thema. Hiervoor hoef je geen `perfers-color-scheme` blocks meer te schrijven, maar kan je het simpelweg in de custom properties of elementen zelf zetten.

  [Mdn bron](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)

---
## Frontend Focus

- [CSS `text-box-trim`](https://developer.chrome.com/blog/css-text-box-trim)
  
  **Shorthand syntax:** `text-box: trim-both cap alphabetic`. This property lets you control the space above and below text, for example `<h1>`, `<button>` and `<p>`.

  <img width=500 src="https://github.com/user-attachments/assets/15f217c0-53b2-49a4-b99f-623ff3188e94">

  These are the 2 most common one-liners:
  ```CSS
  h1 {
  /* trim both sides to the capital letters */
  text-box: trim-both cap alphabetic;

  /* trim both sides to the lowercase letter x */
  text-box: trim-both ex alphabetic;
  ```

  **Use cases:**
  
  <img width=500 src="https://github.com/user-attachments/assets/02de203e-b08e-4edd-863b-dc721bdba228">

  <img width=500 src="https://github.com/user-attachments/assets/6969c9b2-4c61-4006-8e40-7699fa9e41bc">

  <img width=500 src="https://github.com/user-attachments/assets/5b51621c-3d15-40b1-ad44-7e5906b832b2">

---

- [6 CSS snippets every frontend developer should know in 2025](https://nerdy.dev/6-css-snippets-every-front-end-developer-should-know-in-2025)

- [Relatively New Things You Should Know about HTML Heading Into 2025]( https://frontendmasters.com/blog/bone-up-html-2025/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-603-january-16-2025&_bhlid=175524c28854c483a4283b2c558dbbdb6e34fae5)

---

- [The European Accessibility Act for websites and apps (into effect June 28, 2025)](https://martijnhols.nl/blog/the-european-accessibility-act-for-websites-and-apps)
  - Which websites and apps are covered?:
    - Electronic communications services, except those used only for machine-to-machine communication.
    - Audiovisual media service platforms, such as video streaming services.
    - Passenger transport services (air, bus, rail, and waterborne transport), except for urban and suburban public transport.
    - Banking and financial services, including payment services, consumer credit, investment services, and insurance-related financial products.
    - E-books and dedicated reading software.
    - E-commerce services (i.e. webshops).
   
  - The main requirements under the EAA for sites and apps are:
    - Accessible UI and content
    - Accessibility statement

---

- [The Popover API is now Baseline Newly available!](https://web.dev/blog/popover-baseline?hl=en):
   De Popover API biedt een ingebouwde manier om verschillende soorten popovers te maken die in webapplicaties worden gebruikt. Voorheen moest je hiervoor JavaScript gebruiken en moest je er goed op letten dat je ze op een toegankelijke manier implementeerde. De API brengt dit allemaal naar de browser, en een eenvoudige popover kan declaratief in HTML worden gemaakt.

---

- [Three Approaches to the “&” (ampersand) Selector in CSS](https://frontendmasters.com/blog/three-approaches-to-the-ampersand-selector-in-css/):
   In CSS nesting, the & (ampersand symbol) selector adds style rules based on the relation between nested selectors. For example, a pseudo-class (:hover) nested inside a type selector (div) becomes a compound selector (div:hover) when the nested pseudo-class is prefixed with &.

    **Bijvoorbeeld:**
  ```CSS
  div {
  &:hover {
    background: green;
  }
  }

  /*
  The above code is equivalent to:
  div:hover {
    background: green;
  }
  */
  ```
   By using the & selector to concatenate class names, style rules for elements within a module can be arranged together based on their shared class names.

   **Bijvoorbeeld:**
  ```HTML
  <div class="cards trek">
  <p>Trekking</p>
  </div>
  <div class="cards wildlife">
    <p>Wildlife spotting</p>
  </div>
  <div class="cards stargaze">
    <p>Stargazing camp</p>
  </div>
  ```
  ```CSS
  .cards {
  background: center/cover var(--bg);

    &.trek {
      --bg: url("trek.jpg");
    }
    &.wildlife {
      --bg: url("wildlife.jpg");
    }
    &.stargaze {
      --bg: url("stargaze.jpg");
    }
  }
  ```
  Heres a useful way to space elements in an article where there's spacing between each paragraph, and the spacing between the paragraphs and another kind of element, such as an image, that's inserted between them:
  ```CSS
  article {
  /* etc. */
  p {
    margin: 0;
    
    /* <p> that's after/below an element that's not <p> */
    *:not(&) + & { 
      margin-top: 30px; 
    }
    
    /* <p> that's before/above an element that's not <p> */
    &:not(:has(+&)) { 
      margin-bottom: 30px; 
    } 
    
    /* <p> that's after/below another <p> */
    & + & {
      margin-top: 12px; 
    }
  }
  /* etc. */
  }
  ```
  
---

- [Functions in CSS](https://css-tricks.com/functions-in-css/): This article introduces the concept of custom functions in CSS, allowing authors to create parameterized styles similar to custom properties but with added flexibility. These functions can accept arguments, have default values, and return computed results, enhancing the dynamic capabilities of CSS. 

    **Example: Defining a Custom Border Function:**

    ```CSS
    @function --dashed-border(--color: red) {
      result: 2px dashed var(--color);
    }
    
    div {
      border: --dashed-border(blue); /* Results in: 2px dashed blue */
    }
    ```
    In this example, the `--dashed-border` function defines a dashed border style that accepts a `--color` argument with a default value of red. When applied to a `div` element with the argument blue, it results in a `2px dashed blue` border. 

---

- [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors/): In CSS, we can now generate a color that is relative to another color. 

    ```CSS
    /* Relative Color Syntax */
    color-function(from origin-color channel1 channel2 channel3 / alpha(optional))
    /* ****** */
    ```
    For example, if we want to have a black color with 10% transparency, we do the following:
    ```CSS
    .button {
      /* other styles */
      border-color: rgb(from #000 r g b / 0.1);
    }
    ```
    In plain words, it’s like saying:

    Get the rgb values from `#000` and change the alpha to `0.1`

---

- [Cool native HTML elements (that I didnt know about...)](https://harrisonbroadbent.com/blog/cool-native-html-elements/):
    - `<progress>`
    - `<kbd>` (Key combinations)

---

- [View transitions with border-radius](https://www.bram.us/2025/03/11/view-transitions-border-radius/)
  
---

**Tools:**
- [Easing wizard](https://easingwizard.com/)
- [Image to Gradient](https://photogradient.com/)
- [Flexbox Labs: A Visual tool for creating flexbox layouts](https://flexboxlabs.netlify.app/)
- [UI fonts: Test and preview fonts in real-time for all your design needs](https://www.uifonts.app/)
- [Accessible UI palette generator](https://thisisfranciswu.com/enterprise-ui-palette-generator/#)
- [Super color palette](https://supercolorpalette.com/)

**Tutorials:**
- [How to Create Wavy Boxes Using CSS](https://verpex.com/blog/website-tips/how-to-create-wavy-boxes-using-css)
- [Pure CSS halftone effect in 3 declarations](https://frontendmasters.com/blog/pure-css-halftone-effect-in-3-declarations/)

---
## CSS Weekly

- [Overflow: clip](https://ishadeed.com/article/overflow-clip/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-599-november-20-2024&_bhlid=71db572afb9149abeee0ca0ae97ae111815fc307)

  `overflow:clip` is super handig om te gebruiken wanneer maar één axis geclipped moet worden.

  **Bijvoorbeeld:**

  <img height=300 src="https://github.com/user-attachments/assets/261651d9-1d67-4d75-af98-e7a016e5e775">
  <img height=300 src="https://github.com/user-attachments/assets/18b5c256-ee8c-444a-8171-ef24ac4c6078">

---

- [How To Fix Largest Contentful Paint For Background Images](https://www.debugbear.com/blog/largest-contentful-paint-background-images?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-601-december-11-2024&_bhlid=4e6d48ba793761390a661fb573b0da14aae82218)

  Het vooraf laden van de LCP-afbeelding met `fetchpriority="high"` zou de prestaties voor achtergrondafbeeldingen moeten verbeteren. Deze preload-hint zorgt ervoor dat de browser de afbeelding sneller kan ophalen, zonder eerst te wachten tot een CSS-bestand is gedownload of tot de pagina begint met renderen.

---

- [Gradienty](https://gradienty.codes/)

  Deze tool is echt super handig voor van alles! Je kunt gradients opzoeken en direct kopiëren, CSS animations bekijken en kopiëren, kleuren paletten bekijken en deze zelfs visualiseren in een echte webpagina!

---

- **CSS Wrapped 2024:**
  - **Components:** 
    - `field-sizing`: textarea, select en input kunnen hiermee groeien of krimpen zo groot als de placeholder. Dit is nog niet supported op Safari.
    - **Mutually exclusive `<details>` elements:** Om een ​​exclusive accordeon te maken, voeg je een name-attribuut toe aan de `<details>` elementen. Wanneer dit attribuut wordt gebruikt, vormen de `<details>` met dezelfde name value een semantische groep. Wanneer je een van de `<details>` elementen uit de groep opent, wordt het eerder geopende element automatisch gesloten.
    - `::details-content`: hiermee kun je het deel dat opent en sluit van een details element specifieker stylen.
    - **Anchor**
  - **Interactions:**
    - **Custom Scrollbars** met `scrollbar-color` & `scrollbar-width`
    - **View transitions**
    - **Scroll driven animations**
    - **Scroll snap events:** Het `scrollsnapchange` event wordt op hetzelfde moment geactiveerd als `scrollend`, wanneer de scroll is gestopt en de gebruiker niet meer met de scroller communiceert. Het `scrollsnapchanging` event staat te popelen om te vuren en roept de callback aan zodra de scroller een nieuw snap target heeft. Dit is handig voor directe UX-feedback en biedt een mechanisme voor directe visuele updates op basis van de interactie van de gebruiker.
  - **Developer Experience:**
    - **Backdrop Inheritence:** Vanaf Chrome 122 is `::backdrop` omgezet in een tree abiding element, wat betekent dat het alle overerfbare eigenschappen van het oorspronkelijke element erft.
    - `light-dark()`
    - `@property` heeft nu cross browser support
    - **Popover API:** Met de Popover API kun je gelaagde interfaces bouwen, zoals tooltips, menu's, teaching UI's en meer.
    - `@starting-style`: De `@starting-style` wordt gebruikt om stijlen voor een element te definiëren voordat het de eerste stijlupdate heeft ontvangen. Wanneer je die eigenschappen instelt om te transitionen met CSS-transities, kun je deze starting-styles gebruiken om entry-effecten te creëren.
    - `paint-order`: Bij gebruik kan `text-stroke` de `paint-order` property de volgorde bepalen waarin de tekstvulling en de gewenste lijn worden gestapeld of samen worden gerenderd. Dit kan handig zijn als je wil verzekeren dat de lijn bovenop de vulling wordt gerenderd.
   
- `text-wrap: pretty` voor paragraphs (zorgt ervoor dat er niet maar 1 woord op de laatste regel komt te staan)
- `text-wrap: balance` voor koppen/headings (berekent het aantal woorden en verdeeld het over het aantal regels)

---

- [Popover with Anchor positioning](https://www.youtube.com/watch?v=DNXEORSk4GU)

  Met anchor positioning kan je heel makkelijk een popover plaatsen "anchored" aan een element. In deze video legt Kevin Powell uit hoe dat werkt, en hoe je er voor zorgt dat het op alle browsers werkt.

  <img width=900 src="https://github.com/user-attachments/assets/3041ec3e-e432-4179-9f27-8eafc283bc18">

---

- [CSS `box-decoration-break`](https://12daysofweb.dev/2024/css-box-decoration-break/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-603-january-16-2025&_bhlid=a6a1cbfbf65c0e4befd7b52b023984626b46f101)

- [PureAnim](https://pureanim.netlify.app/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-603-january-16-2025&_bhlid=a6e6f5c68f02875270ccd0ac21b7d753325c0693): Makkelijk SVG's animeren.

---

- [Super toffe sunlit animatie met CSS](https://github.com/jackyzha0/sunlit?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-600-november-27-2024&_bhlid=a1b859cec72f42b942751604bdcb216e31c8db74)

  <img width=900 src="https://github.com/user-attachments/assets/2584a43d-d801-41e5-91b8-fc78d706b2bc">

---

- [Change font-weight based on the user's screen DPI](https://muffinman.io/blog/font-weight-based-on-dpi/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-605-february-6-2025&_bhlid=774c850e8b5c881f0ad611fb902916bf1a93f43f)

  Here is an example of the same text rendered on two screens with different device pixel ratios. At the top is a hi-DPI screen (with a pixel ratio of 2), and below is a low-DPI screen (with a pixel ratio of 1). The font used is Inter, 24px tall, with a font weight of 100:

  <img width=400 src="https://github.com/user-attachments/assets/b1394a70-7ecc-4c3b-963c-1a094ae1d010">

  This problem is a great example of how we can use progressive enhancement to improve the user experience. We'll set a default font weight that is readable on low-DPI screens, then use CSS media queries to target hi-DPI screens and apply thinner fonts.

  **Voorbeeld:**

```CSS
  /* Default font weight for low-DPI screens */
h1 {
  font-weight: 300;
}

/* Progressive enhancement for hi-DPI screens */
/* Making font thinner and more elegant */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  h1 {
    font-weight: 100;
  }
}
```
---

- [CSS Meets Voxel Art: Building a Rendering Engine with Stacked Grids](https://tympanus.net/codrops/2025/03/03/css-meets-voxel-art-building-a-rendering-engine-with-stacked-grids/?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-607-march-6-2025&_bhlid=7267e45e786637db0957c56d528e279a7293cb95)
  Agustin Capeletto has created a range of awesome tools at [LayoutIt!](https://layoutit.com/), including the [CSS Voxel Editor](https://voxels.layoutit.com/), which showcases the power of pure CSS for 3D rendering.
  In this article, Agustin takes us behind the scenes of his latest project, sharing how stacked grids and transforms come together to create a fully addressable 3D space—using nothing but CSS.
  
  <img width=500 src="https://github.com/user-attachments/assets/f9b4519b-df99-499d-b2ec-5d565d5e4b40">

  > Hoe gaaf is dit!!!

  <img width=500 src="https://github.com/user-attachments/assets/aafe606d-3168-465f-a46e-9aab35a7aaa0">

---

- [Customizable select](https://utilitybend.com/blog/the-customizable-select-part-one-history-trickery-and-styling-the-select-with-css?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-608-march-13-2025&_bhlid=e4f78628fd5f59cecefaf17f26411bb88f060f7b): Je kan nu het select element nog meer custom stylen. Binnen in `<options>` kan je nu zelfs images toevoegen. Ook kan je `::checkmark`, `option:checked`, `::picker(select)` en `::picker-icon` gebruiken in CSS om nog meer te customizen.

---

- [Faster Rendering with the content-visibility CSS Property](https://www.debugbear.com/blog/content-visibility-api?utm_source=CSS-Weekly&utm_medium=newsletter&utm_campaign=issue-608-march-13-2025&_bhlid=ad591730496c0d6e709b19f40d295b9fb441e6dd): A CSS feature that tells browsers to skip rendering off-screen content until it's needed.


---

**Tools:**

- [MotifyX:](https://link.mail.beehiiv.com/ss/c/u001.R4n8MNPMCLyId5zI93tfGhTpTJDQTPeRl9dRCxjTXykxg9OLtDSe4X222dUUdDzqd4qsLI3qTeuBev90yl1Cf9TbrlMpbEOLYrUZ4yy-BKMmUT4Dp1g24Pozi--pAGJzhTF3w2P6JunguvknXjcPNWpIu2MOlzzNMDAq3A3EQfXPbVGpeCFViVEO1etWe5pXAVbACM5GL3PpX9o6zxRs8PB9dRtfNaGwTU2liVAzdzE/4ek/5f4BFbWuQpuNznl8aHuGkw/h33/h001.1v2iR4oBGNO-pilBCyL1WyqHTXBeH1hN2Jl_51JoJGw) collection of mesmerizing background patterns crafted for modern developers and designers

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
- https://cydstumpel.nl/ !!!
  
  ![image](https://github.com/user-attachments/assets/3ba914cb-2c7f-4807-8397-3bf4375b511a)

- https://www.wix.com/studio/blog/scrollytelling
- https://www.niccolomiranda.com/work
  
  ![image](https://github.com/user-attachments/assets/25dc20a4-a682-4031-a2b3-33b9bcfa2d53)
  ![image](https://github.com/user-attachments/assets/a6e0d4a2-bd24-4e06-8ab6-0ed298b5c755)
  
- https://tympanus.net/Development/KineticTypePageTransition/
  
  ![image](https://github.com/user-attachments/assets/d9c6986b-c903-4a4f-9000-75ed78cfa1ae)
  ![image](https://github.com/user-attachments/assets/139b8720-b51c-4337-93ca-15e732229c55)

- [Grainy Gradients](https://css-tricks.com/grainy-gradients/)
- [snapsvg](http://snapsvg.io/start/)
