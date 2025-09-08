"use strict";
// parâmetros obrigatórios
Object.defineProperty(exports, "__esModule", { value: true });
function greetVisitor(name, number) {
    console.log(`Olá, ${name}! Seja bem-vindo(a)!`);
    console.log(`Você o visitante de número #${number}`);
}
greetVisitor("Pedro", 99);
// parâmetro opcional
function greetVisitor2(name, number) {
    console.log(`Olá, ${name}! Seja bem-vindo(a)!`);
    if (number !== undefined) {
        console.log(`Você o visitante de número #${number}`);
    }
}
greetVisitor2("Gabi");
// parâmetro default
function greetVisitor3(name, number = 0) {
    console.log(`Olá, ${name}! Seja bem-vindo(a)!`);
    console.log(`Você o visitante de número #${number}`);
}
greetVisitor3("Ana");
greetVisitor3("Bia", 23);
