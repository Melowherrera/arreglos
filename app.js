// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

var arrayAleatorio = [];

for (var i = 0; i < 10; i++) {
    var numeroAleatorio = Math.floor(Math.random() * 100); // Números aleatorios del 0 al 99
    arrayAleatorio.push(numeroAleatorio);
}

console.log("Array de números aleatorios:", arrayAleatorio);

// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array.
// (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

var inputUsuario = prompt("Ingrese un string con varias palabras separadas por coma:");
var arrayDePalabras = inputUsuario.split(",").map(function(item) {
    return parseInt(item, 10);
});

console.log("Array resultante:", arrayDePalabras);

// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente:
// El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.

var miArray = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor
var arrayOrdenado = miArray.slice().sort(function(a, b) {
    return a - b;
});

var numeroMenor = arrayOrdenado[0];
var numeroMayor = arrayOrdenado[arrayOrdenado.length - 1];

console.log("Arreglo ordenado de menor a mayor:", arrayOrdenado);
console.log("Número menor:", numeroMenor);
console.log("Número mayor:", numeroMayor);