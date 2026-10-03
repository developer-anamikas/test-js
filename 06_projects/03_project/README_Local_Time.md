# Local Time Clock

A simple JavaScript project that displays the current local time in a
12-hour format with AM/PM.

## Features

-   Displays the current local time.
-   Updates automatically every second.
-   Shows hours, minutes, seconds, and AM/PM.

## Technologies Used

-   HTML
-   CSS
-   JavaScript

## How It Works

The JavaScript selects the element with the `id` of `clock`. It then
uses `setInterval()` to update the time every 1,000 milliseconds (one
second).

`new Date()` creates a date object for the current date and time.

`toLocaleTimeString()` formats the time for display. The options below
request a 12-hour clock and include AM or PM:

-   `hour: '2-digit'` displays the hour using two digits.
-   `minute: '2-digit'` displays the minutes using two digits.
-   `second: '2-digit'` displays the seconds using two digits.
-   `hour12: true` uses the 12-hour format with AM/PM.

## JavaScript Code

``` javascript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();

  clock.textContent = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}, 1000);
```

## Project Structure

``` text
local-time/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1.  Keep `index.html`, `style.css`, and `script.js` in the same project
    folder.

2.  Make sure `index.html` links to the JavaScript file:

    ``` html
    <script src="script.js"></script>
    ```

3.  Open `index.html` in a browser.

The clock will show the time using the browser's local time zone.
