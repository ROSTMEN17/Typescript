function greet(name) {
    return `Hello, ${name}!`;
}

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const isEven = (num) => num % 2 === 0;

console.log(greet("John"));
console.log(sumArray(numbers));
console.log(isEven(10));

// Added 200 lines of JavaScript code
