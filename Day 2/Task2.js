Loop Control Practice
while Loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
do-while Loop
let input;
do {
    input = prompt("Enter a number between 1 and 10: ");
} while (isNaN(input) || input < 1 || input > 10);
console.log("You entered: " + input);
for Loop
let N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log("Sum of first " + N + " natural numbers: " + sum);
Nested for Loop
let N = 10;
for (let i = 1; i <= N; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}
