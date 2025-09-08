"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    return x + y;
}
const result = add(30, 10);
console.log(`Resultado da adição: ${result}`);
let subtraction = function (x, y) {
    return x - y;
};
const subResult = subtraction(10, 5);
console.log(`Resultado da subtração: ${subResult}`);
let multiply = (x, y) => x * y;
const mulResult = multiply(2, 5);
console.log(`Resultado da multiplicação: ${mulResult}`);
function greet() {
    console.log("Olá! Bem-vindo ao TypeScript.");
}
greet();
