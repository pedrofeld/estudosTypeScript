import { uniq, sortBy, cloneDeep } from 'lodash';

const numbers: number[] = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueNumbers: number[] = uniq(numbers);
console.log('Unique Numbers:', uniqueNumbers);

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const sortedPeople: Person[] = sortBy(people, ['age']);
console.log('Sorted People by Age:', sortedPeople);

const person: Person = { name: 'David', age: 40 };
const clonedPerson: Person = cloneDeep(person);
clonedPerson.age = 41;

console.log('Original Person:', person);
console.log('Cloned Person:', clonedPerson);