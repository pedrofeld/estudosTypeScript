"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateUser = { name: "Pedro" }; // id não é obrigatório
const user = { id: 1, name: "Pedro" };
const userRequired = { id: 1, name: "Pedro" }; // tudo é obrigatório
const userReadonly = { id: 1, name: "Pedro" }; // torna as propriedades imutáveis
