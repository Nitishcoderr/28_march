
// Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

function convertToNUmber(str){
    const num = Number(str);
    if(isNaN(num)){
        throw new Error("Invalid Number")
    }
    return num;
}

try {
    const num = convertToNUmber("wer")
    console.log(num);
} catch (error) {
    console.log(error.message);
}