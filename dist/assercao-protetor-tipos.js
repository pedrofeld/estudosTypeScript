"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let texto;
texto = "Olá, mundo!";
console.log(texto.toLowerCase()); // usando asserção de tipo para string (as string)
console.log(texto.toUpperCase()); // usando asserção de tipo para string (<string>)
// texto = 10 
if (typeof texto == "string") {
    console.log(texto.toLocaleLowerCase());
}
else {
    console.log("A variável 'texto' não é uma string.");
}
