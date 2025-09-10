"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueNumbers = (0, lodash_1.uniq)(numbers);
console.log('Unique Numbers:', uniqueNumbers);
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const sortedPeople = (0, lodash_1.sortBy)(people, ['age']);
console.log('Sorted People by Age:', sortedPeople);
const person = { name: 'David', age: 40 };
const clonedPerson = (0, lodash_1.cloneDeep)(person);
clonedPerson.age = 41;
console.log('Original Person:', person);
console.log('Cloned Person:', clonedPerson);
