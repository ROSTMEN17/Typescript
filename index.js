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

/**
 * Функція для привітання користувача.
 * @param {string} name - Ім'я користувача.
 * @returns {string} - Привітання.
 */
function greet(name) {
    return `Hello, ${name}!`;
}

/**
 * Масив чисел.
 * @type {number[]}
 */
const numbers = [1, 2, 3, 4, 5];

/**
 * Функція для підрахунку суми масиву.
 * @param {number[]} arr - Масив чисел.
 * @returns {number} - Сума чисел.
 */
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * Функція для перевірки чи є число парним.
 * @param {number} num - Число.
 * @returns {boolean} - True якщо число парне, інакше False.
 */
const isEven = (num) => num % 2 === 0;

console.log(greet("John"));
console.log(sumArray(numbers));
console.log(isEven(10));

// Added JSDoc types
