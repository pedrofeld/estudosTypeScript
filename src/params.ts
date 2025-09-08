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

console.log("-----");

// parâmetro rest

function greetStudent(escola: string, ...students: string[]): void {
    console.log(`Saudações alunos da escola ${escola}:`);
    students.forEach(student => {
        console.log(`- ${student}`);
    });
}

greetStudent("Growdev", "Jessica", "Tiago", "Carlos");

function sumAll(...numbers: number[]): number {
    let i: number = 0;

    numbers.forEach(num => {
        i += num;
    });

    return i;
}

console.log("-----");

console.log(sumAll(1, 2, 3, 4, 5));

interface Student {
    name: string;
    className: string;
}

console.log("-----");

const student1: Student = { name: "Jessica", className: "Turma A" };

function greetStudent2({name, className}: Student): void {
    console.log(`Olá, ${name} da turma ${className}.`);
}

greetStudent2(student1);