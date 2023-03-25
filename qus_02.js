// Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.

function getPerson(person){
    if(typeof person !== "object" || person == null || !person.name || !person.age){
        throw new Error("Invalid Parameter type")
    }
    return `Name:${person.name}, Age:${person.age}`
}

try {
    const person = getPerson({name:"Nitish",age:23})
    console.log(person);
} catch (error) {
    console.log(error.message);
}