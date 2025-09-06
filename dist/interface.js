"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    firstName: "Pedro",
    lastName: "Feld",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(typeof employee);
console.log(employee, employee.firstName, employee.lastName, employee.fullName());
