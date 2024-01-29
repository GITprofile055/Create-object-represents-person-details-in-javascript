// Create a person object
var person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
};

// Function to print properties and values of the person object
function printPersonDetails(personObject) {
    for (var key in personObject) {
        if (personObject.hasOwnProperty(key)) {
            console.log(key + ": " + personObject[key]);
        }
    }
}

// Call the function with the person object
printPersonDetails(person);
