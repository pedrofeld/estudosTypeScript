interface Empregado {
    cracha: string,
    nome: string
}

interface Gestor {
    acessoAdmin: boolean
}

let pessoa: Empregado & Gestor = {
    cracha: "12345",
    nome: "Pedro Feld",
    acessoAdmin: true
}

console.log(pessoa);