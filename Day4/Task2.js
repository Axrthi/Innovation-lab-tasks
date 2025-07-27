let numbersArray = [1, 2, 3, 4, 5];
let stringsArray = ["apple", "banana", "cherry"];
console.log("Numbers Array:", numbersArray);
console.log("Strings Array:", stringsArray);

// Access elements
let firstElement = numbersArray[0];
console.log("First Element:", firstElement);

// Modify elements
numbersArray[0] = 10;
console.log("Modified Numbers Array:", numbersArray);

let arraySize = numbersArray.length;
console.log("Array Size:", arraySize);

// Add elements
numbersArray.push(6);
console.log("After Push:", numbersArray);

numbersArray.unshift(0);
console.log("After Unshift:", numbersArray);

// Remove elements
let removedElement = numbersArray.pop();
console.log("Removed Element:", removedElement);
console.log("After Pop:", numbersArray);

removedElement = numbersArray.shift();
console.log("Removed Element:", removedElement);
console.log("After Shift:", numbersArray);
