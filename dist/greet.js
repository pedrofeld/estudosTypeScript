"use strict";
// função nomeada
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    console.log(`Olá, ${name} Seja bem-vindo!!`);
}
// função anônima
const greetAnonymous = function (name) {
    console.log(`Olá, ${name} Seja bem-vindo!!`);
};
// arrow function
const greetArrow = (name) => {
    console.log(`Olá, ${name} Seja bem-vindo!!`);
};
greet("Pedro");
greetAnonymous("Maria");
greetArrow("João");
