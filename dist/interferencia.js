"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ano; // interferência explícita
let ano2 = 2030; // interferência implícita
let ano3 = 2025; // interferência explícita com atribuição
let ano4; // sem interferência, any
ano = 2015;
ano4 = 2040;
console.log(typeof ano);
console.log(typeof ano2);
console.log(typeof ano3);
console.log(typeof ano4);
