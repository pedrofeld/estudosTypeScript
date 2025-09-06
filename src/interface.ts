interface Employee {
    firstName: string,
    lastName: string,
    fullName(): string
}

let employee: Employee = {
    firstName: "Pedro",
    lastName: "Feld",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

console.log(typeof employee);
console.log(employee, employee.firstName, employee.lastName, employee.fullName());