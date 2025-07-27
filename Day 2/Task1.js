Simple if Statement
let num = 5;
if (num > 0) {
    console.log(num + " is positive");
}
if-else Block
let num = -5;
if (num > 0) {
    console.log(num + " is positive");
} else {
    console.log(num + " is negative or zero");
}
Multiple Conditions with else-if
let num = 0;
if (num > 0) {
    console.log(num + " is positive");
} else if (num < 0) {
    console.log(num + " is negative");
} else {
    console.log(num + " is zero");
}
Switch Statement for Menu Selection Simulation
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
