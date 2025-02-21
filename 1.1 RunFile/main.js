// main.js

// Importamos el módulo mathOperations
const mathOps = require('./mathOperations');

// Usamos las funciones del módulo
const num1 = 10;
const num2 = 5;

console.log(`Suma: ${mathOps.suma(num1, num2)}`);
console.log(`Resta: ${mathOps.resta(num1, num2)}`);
console.log(`Multiplicación: ${mathOps.multiplicacion(num1, num2)}`);
console.log(`División: ${mathOps.division(num1, num2)}`);

// Manejo de errores en la división
try {
    console.log(`División por cero: ${mathOps.division(num1, 0)}`);
} catch (error) {
    console.log(error.message);
}