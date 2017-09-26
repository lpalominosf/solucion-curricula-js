var drawMultipleTimes = function(howManyTimes, whatToDraw) {
for (var i = 1; i <= howManyTimes; i++) {
	console.log(i + ' ' + whatToDraw)
	}
}
drawMultipleTimes(8, 'Hola'); //Invocando la funcion!
drawMultipleTimes(5, 'chau');
drawMultipleTimes(3, ':)');

//for (var i = 1; i <= 8; i++) {
//	console.log(i + '' + 'Hola');
//}
//for (var i = 1; i <= 5; i++) {
//	console.log(i + '' + 'chau');
//}
//for (var i = 1; i <= 5; i++) { // Cantidad de repeticiones (5)
//console.log(i + '' + ':)');
//}
