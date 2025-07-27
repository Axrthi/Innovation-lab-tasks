let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

let numbers = [1, 2, 3, 4, 5];
for (let index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}
