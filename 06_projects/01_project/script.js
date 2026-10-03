// TOPIC: JavaScript Events & DOM Manipulation

// 1. Select all elements with class "button" (returns a NodeList of 4 span elements)
const buttons = document.querySelectorAll('.button')

// 2. Select the <body> element so we can modify its CSS background color
const body = document.querySelector('body')

// 3. Loop through each button element in the list
// 'button' is the parameter representing the current box element in this iteration
buttons.forEach( (button) => {

    // 4. EVENT LISTENER (Events Topic in JS):
    // .addEventListener listens for user interactions. Here, it listens for a 'click'.
    // The second argument `(e) => { ... }` is a CALLBACK FUNCTION.
    // NOTE: This callback function ONLY runs when the user actually clicks the button!
    button.addEventListener('click', (e) => {
        
        // 5. EVENT OBJECT (e):
        // 'e' is the Event Object created automatically by JS when a click occurs.
        // It holds information about the click event (coordinates, time, target, etc.).
        console.log(e)
        
        // 6. TARGET PROPERTY (e.target):
        // 'e.target' points directly to the exact HTML element that was clicked.
        // Example output: <span class="button" id="blue"></span>
        console.log(e.target)

        // 7. CONDITIONS & ID EXTRACTION:
        // 'e.target.id' gets the string value of the clicked element's ID attribute.
        
        // Checks if the clicked button has an ID of 'grey'
        if(e.target.id === 'grey'){
            // Changes the <body> background color to 'grey'
            body.style.backgroundColor = e.target.id
        }

        // Checks if the clicked button has an ID of 'white'
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }

        // Checks if the clicked button has an ID of 'blue'
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }

        // Checks if the clicked button has an ID of 'yellow'
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})
