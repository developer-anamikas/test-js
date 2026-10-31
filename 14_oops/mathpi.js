const descriptor=Object.getOwnPropertyDescriptor(Math,'PI');        /*Yes, that is exactly correct. In the expression Math.PI, PI is a property of the Math object. */

// console.log(descriptor);
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

/* the speaker explains that getOwnPropertyDescriptor is a powerful tool 
used to inspect the hidden internal properties of an object*/

/* It reveals how a specific property is configured, including flags like writable, enumerable, and configurable. 
This is crucial for understanding 
why certain objects or properties behave the way they do, such as why Math.PI cannot be overwritten */

/*Syntax Requirements: The method requires two arguments: the object you are inspecting and the property name (key) as a string.
Passing just the object will return undefined because it needs to know specifically which property's descriptor you want to see */



/*If you are asked this in an interview, you should explain that Object.getOwnPropertyDescriptor is used to inspect the hidden metadata (flags) of an object's properties, which are not visible through standard iteration or logging (3:34 - 3:52).
Here is how you can frame your answer:
Purpose: It reveals how a specific property is configured. It allows you to see the three essential internal flags: writable (can the value be changed?), enumerable (will it show up in loops?), and configurable (can the property be deleted or changed?).
Debug Utility: It is essential for debugging unexpected object behavior. For example, if you are struggling to iterate over an object or modify its values, this method tells you exactly which configuration flag is blocking your action (18:18 - 18:35).
Control: It explains why certain built-in properties, like Math.PI, are read-only and cannot be overridden, as their writable flag is set to false by the JavaScript engine (6:24 - 6:57).
Professional Use: Mention that you can use Object.defineProperty to intentionally set these flags yourself, giving you fine-grained control over your object's security and behavior in complex applications */




/*In the context of JavaScript objects discussed in the video, flags are the hidden configuration settings that define how a specific property behaves (6:35-6:57). You can think of them as internal controls that the JavaScript engine uses to manage object properties.

The video highlights three primary flags:

Writable: Determines if the property's value can be changed. If set to false, you cannot modify the value (6:35).
Enumerable: Controls whether the property appears during loops (like for...in or Object.keys). If false, the property is hidden from these iterations .
Configurable: Decides if the property can be deleted or if its other flags can be modified. If false, you are locked out of changing its configuration . */

/*Think of a property as the "data" (e.g., name: 'Ginger Tea') and the flags as the "rules" or "metadata" that control that data */

const obj1 = Object.create(null);             //In JavaScript, Object.create(null) creates an object that has no prototype

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


//I want to make the name property non-writable, so that it cannot be changed. I can do this using Object.defineProperty:
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false, //This means that the name property will not show up in for...in loops or Object.keys() calls.
    
})

//Objs are usually not iterable, but we can use Object.entries to iterate over the properties of an object. Object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
//https://chatgpt.com/s/t_6ae59ae68f248191aff960351386c2c7
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}