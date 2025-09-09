type Calculator = (...numbers: number[]) => number;

const sum: Calculator = (...numbers: number[]): number => {
    let result: number = 0;
    numbers.forEach(num => result += num);
    return result;
}

const subtract: Calculator = (...numbers: number[]): number => {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (result === undefined) {
            throw new Error("Número inválido para subtração.");
        }
        result -= numbers[i]!;
    }
    if (result === undefined) {
        throw new Error("Número inválido para subtração.");
    }
    return result;
}

const divide: Calculator = (...numbers: number[]): number => {
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
        result /= numbers[i]!;
    }
    return result;
}

const multiply: Calculator = (...numbers: number[]): number => {
    let result: number = 1;
    numbers.forEach(num => result *= num);
    return result;
}

console.log("Soma: ", sum(1, 2, 3, 4, 5));
console.log("Subtração: ", subtract(10, 2, 1));
console.log("Divisão: ", divide(100, 2, 5));
console.log("Multiplicação: ", multiply(2, 3, 4));