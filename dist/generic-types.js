"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identify(value) {
    return value;
}
const num = identify(42);
const text = identify('Hello, world!');
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
numberArray.push(25);
// numberArray.push("text"); // This will cause a TypeScript error
let stringArray = getArray(['Alice', 'Bob', 'Charlie']);
stringArray.push('David');
// stringArray.push(30); // This will cause a TypeScript error
