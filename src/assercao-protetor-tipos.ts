let texto: unknown;

texto = "Olá, mundo!";

console.log((texto as string).toLowerCase()); // usando asserção de tipo para string (as string)
console.log((<string>texto).toUpperCase()); // usando asserção de tipo para string (<string>)

// texto = 10 
if (typeof texto == "string") {
    console.log((texto as string).toLocaleLowerCase());
} else {
    console.log("A variável 'texto' não é uma string.");
}