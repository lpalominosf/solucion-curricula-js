// Tamaño de la cuadrícula
var size = parseInt(prompt("¿Cuál será el tamaño de tu cuadrícula?"));
// Creando nuestra cuadrícula, utilizaremos un for que se repita 8 veces
var result = "";

for (var row = 1; row <= size; row++) {
	for (var column = 1; column <= size; column++) {
	if ((column + row) % 2 === 0) {
		result += " ";
	} else {
		result += "#";
		}
	}
	result += "\n";
}
console.log(result);