let carro: any;

carro = 10
carro = "Fusca"
carro = false

carro.toLowerCase(); // erro no runtime

let carro2: unknown;

carro2 = 2023;
carro2 = "Corolla";
carro2 = true;

// carro2.toLowerCase(); // erro na compilação