function performAction(callback) {
    console.log("Performing action...");
    callback(); // Calling the callback function
}

function callbackFunction() {
    console.log("Callback function executed.");
}

performAction(callbackFunction);

function performTask(callback) {
    console.log("Task started...");
    setTimeout(() => {
        console.log("Task completed.");
        callback(); // Calling the callback after task completion
    }, 2000); // Simulating a delay
}

function onTaskCompletion() {
    console.log("Task completion callback executed.");
}

performTask(onTaskCompletion);

// Global Scope
var globalVar = "global";

function exampleFunction() {
    // Local Scope
    var localVar = "local";
    if (true) {
        // Block Scope
        let blockLet = "block let";
        const blockConst = "block const";
        console.log(blockLet); // Accessible within the block
        console.log(blockConst); // Accessible within the block
    }
    
    
    console.log(localVar); 
}

console.log(globalVar);  


exampleFunction();
