type CarYear = number;
type CarModel = string;
type CarType = string;

type Car = {
    year: CarYear,
    model: CarModel,
    type: CarType
};

const carYear: CarYear = 2020;
const carModel: CarModel = "Toyota Corolla";
const carType: CarType = "Sedan";

const car: Car = {
    year: carYear,
    model: carModel,
    type: carType
};

console.log(car);