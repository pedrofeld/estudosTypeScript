"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = sum;
function sum(...numbers) {
    let result = 0;
    numbers.forEach(n => result += n);
    return result;
}
