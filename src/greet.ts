// função nomeada

function greet(name: string): void {
    console.log(`Olá, ${name} Seja bem-vindo!!`);
}

// função anônima

const greetAnonymous = function(name: string): void {
    console.log(`Olá, ${name} Seja bem-vindo!!`);
}

// arrow function

const greetArrow = (name: string): void => {
    console.log(`Olá, ${name} Seja bem-vindo!!`);
}

greet("Pedro");
greetAnonymous("Maria");
greetArrow("João");