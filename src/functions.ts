function add(x: number, y: number): number {
    return x + y;
}

const result: number = add(30, 10);
console.log(`Resultado da adição: ${result}`);

let subtraction = function(x: number, y: number): number {
    return x - y;
}

const subResult: number = subtraction(10, 5);
console.log(`Resultado da subtração: ${subResult}`);

let multiply = (x: number, y: number): number => x * y;

const mulResult: number = multiply(2, 5);
console.log(`Resultado da multiplicação: ${mulResult}`);

function greet(): void {
    console.log("Olá! Bem-vindo ao TypeScript.");
}

greet();