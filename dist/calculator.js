"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (...numbers) => {
    let result = 0;
    numbers.forEach(num => result += num);
    return result;
};
const subtract = (...numbers) => {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (result === undefined) {
            throw new Error("Número inválido para subtração.");
        }
        result -= numbers[i];
    }
    if (result === undefined) {
        throw new Error("Número inválido para subtração.");
    }
    return result;
};
const divide = (...numbers) => {
    if (numbers.length === 0) {
        throw new Error("Nenhum número fornecido para divisão.");
    }
    if (numbers.includes(0)) {
        throw new Error("Não é possível dividir por zero.");
    }
    let result = numbers[0];
    if (result == undefined) {
        throw new Error("Número inicial inválido para divisão.");
    }
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === undefined) {
            throw new Error("Número inválido para divisão.");
        }
        result /= numbers[i];
    }
    return result;
};
const multiply = (...numbers) => {
    let result = 1;
    numbers.forEach(num => result *= num);
    return result;
};
console.log("Soma: ", sum(1, 2, 3, 4, 5));
console.log("Subtração: ", subtract(10, 2, 1));
console.log("Divisão: ", divide(100, 2, 5));
console.log("Multiplicação: ", multiply(2, 3, 4));
