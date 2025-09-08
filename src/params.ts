// parâmetros obrigatórios

function greetVisitor(name: string, number: number): void {
    console.log(`Olá, ${name}! Seja bem-vindo(a)!`);
    console.log(`Você o visitante de número #${number}`)
}

greetVisitor("Pedro", 99);

// parâmetro opcional

function greetVisitor2(name: string, number?: number): void {
    console.log(`Olá, ${name}! Seja bem-vindo(a)!`);

    if (number !== undefined) {
        console.log(`Você o visitante de número #${number}`)
    }
}

greetVisitor2("Gabi");

// parâmetro default

function greetVisitor3(name: string, number: number = 0): void {
    console.log(`Olá, ${name}! Seja bem-vindo(a)!`);
    console.log(`Você o visitante de número #${number}`)
}

greetVisitor3("Ana");
greetVisitor3("Bia", 23);