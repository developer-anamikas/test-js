function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {      //OLDER WAY TO USE GETTER SETTER
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })
    /*What Object.defineProperty() does:
    Customizes Property Behavior: It allows you to explicitly 
    define how a property should be accessed (get) and modified (set)
    instead of using standard assignment. */


    /*Yes, you are correct. In the syntax `Object.defineProperty(obj, prop, descriptor)`, the **third argument** is the **descriptor** object.
    This descriptor object is where you define the behavior of the property, such as:

    *   **`get`**: A function used to retrieve the value.
    *   **`set`**: A function used to assign a new value.
    *   **`enumerable`**: A boolean determining if the property shows up in loops.
    *   **`configurable`**: A boolean determining if the property can be deleted or modified.

    By using this third parameter, you can gain **fine-grained control** over how data is accessed and modified, which is how getters and setters work under the hood in older JavaScript environments (16:20-19:50). */
    /*In the context of Object.defineProperty(), a descriptor is a JavaScript object
    that acts as a configuration map for a specific property. It dictates how that property behaves within an object */
}
