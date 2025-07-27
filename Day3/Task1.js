function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

sumAll(1, 2, 3, 4); 

function sumAll(...args) {
    let sum = args.reduce((acc, current) => acc + current, 0);
    console.log(sum);
}

sumAll(1, 2, 3, 4); 
