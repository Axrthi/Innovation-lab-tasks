let randomNumber = Math.random();
console.log("Random Number:", randomNumber);


let numberToRound = 4.7;
let roundedDown = Math.floor(numberToRound);
let roundedUp = Math.ceil(numberToRound);
console.log("Rounded Down:", roundedDown);
console.log("Rounded Up:", roundedUp);


let numbers = [12, 45, 7, 23, 56, 89, 34];
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);
console.log("Min Number:", minNumber);
console.log("Max Number:", maxNumber);





let originalString = "Hello, World!";


let upperCase = originalString.toUpperCase();
let lowerCase = originalString.toLowerCase();
console.log("Upper Case:", upperCase);
console.log("Lower Case:", lowerCase);


let substring = originalString.substring(0, 5);
console.log("Substring:", substring);


let includesWorld = originalString.includes("World");
console.log("Includes 'World':", includesWorld);


let replacedString = originalString.replace("World", "JavaScript");
console.log("Replaced String:", replacedString);
