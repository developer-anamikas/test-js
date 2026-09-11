// //Immediately Invoked Function  Expressions(IIFE)

// // ()()            //FIRST () -> used to declare func and second one is used to () to directly execute/call the func

// // IIFE (Immediately Invoked Function Expression)

// // 1. Immediate Execution:
// // An IIFE runs immediately as soon as it is defined.
// // Example: useful for starting a database connection when an application starts.

// // 2. Avoiding Global Scope Pollution:
// // An IIFE creates a private scope for its variables.
// // This prevents variables inside the IIFE from conflicting with or being overwritten
// // by variables in the global scope.


// (function username(){
//     // NAMED IIFE
//     console.log("Anamika Sahu");
// })();                                                         

// ((name) => {
//     console.log(`CONNECTED TO ${name}`);
    
// })("Anamika")                                                                      

// // Semicolon (;) with IIFE

// // The semicolon explicitly ends the previous statement.

// // It is especially important when multiple IIFEs are written in the same file.
// // The semicolon tells JavaScript where one IIFE ends before the next one starts.

// // Without the semicolon, JavaScript may try to treat the next IIFE
// // as a continuation of the previous statement, which can cause a syntax error.

// // Example:
// // (function () {
// //     console.log("IIFE 1");
// // })();

// // (function () {
// //     console.log("IIFE 2");
// // })();















// Semicolon (;) with IIFE

// The semicolon explicitly ends the previous statement.

// It is especially important when multiple IIFEs are written in the same file.
// The semicolon tells JavaScript where one IIFE ends before the next one starts.

// Without the semicolon, JavaScript may try to treat the next IIFE
// as a continuation of the previous statement, which can cause a syntax error.

// Example:
// (function () {
//     console.log("IIFE 1");
// })();

// (function () {
//     console.log("IIFE 2");
// })();