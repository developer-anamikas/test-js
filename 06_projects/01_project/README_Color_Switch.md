# Color Switch

A simple JavaScript project that lets users change the webpage's
background color by clicking one of four color buttons.

## Features

-   Displays four color options: grey, white, blue, and yellow.
-   Changes the page background when a color option is clicked.
-   Uses JavaScript event listeners and DOM manipulation.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## How It Works

1.  `document.querySelectorAll('.button')` selects all elements with the
    class `button`. It returns a NodeList containing the four color
    spans.
2.  `document.querySelector('body')` selects the page's `<body>`
    element.
3.  `forEach()` loops through the color elements.
4.  `addEventListener('click', ...)` attaches a click event listener to
    each color element.
5.  When a color is clicked, the event object provides information about
    the click. `e.target` refers to the element that was clicked.
6.  `e.target.id` reads the clicked element's ID. The code uses that ID
    as the body's background color.

For example, clicking the element with `id="blue"` sets the body's
background color to `blue`.

## JavaScript Code

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project Structure

``` text
color-switch/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1.  Keep `index.html`, `style.css`, and `script.js` in the same project
    folder.
2.  Open `index.html` in a web browser.
3.  Click any of the four color options to change the page background.

## Concepts Practiced

-   `querySelector()` and `querySelectorAll()`
-   NodeList and `forEach()`
-   Event listeners and callback functions
-   The click event object
-   `event.target` and element IDs
-   Conditional statements
-   Updating CSS through the DOM
