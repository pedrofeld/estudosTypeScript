type status = "ativo" | "inativo" | "indefinido";

let statusAtual: status = "ativo";
statusAtual = "inativo";
statusAtual = "indefinido";
// statusAtual = "outro"; // Erro

type notaPossivel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

let notaAluno: notaPossivel = 10;
// notaAluno = 11; // Erro

console.log(`Status atual: ${statusAtual}`);
console.log(`Nota do aluno: ${notaAluno}`);