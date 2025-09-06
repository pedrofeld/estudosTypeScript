"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let multiType;
multiType = 20;
multiType = "Vinte";
multiType = true;
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        console.log(`A soma é: ${a + b}`);
        // return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        console.log(`Não é possível somar, apenas concatenar:`);
        console.log(a.concat(b));
        // return a.concat(b);
    }
}
add(10, 20);
add("Olá, ", "mundo!");
