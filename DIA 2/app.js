/*
var name = promt("Ingresa tu nombre");
var age = promt("Ingrese edad");
alert("Hola " + name + ", tu edad es " + age);

if (age == 18) {
	alert("Eres mayor de edad");	
} else  if (age > 18 && age <30 ) {
	alert("Eres joven");
}
*/
var number = 1;
do {
	alert(number);
	number++; //number = number +1; 
} while (number <=5) 
var end = 5; //Queremos que nos incluya el 5
for (var start =1 ; start <=end ; start++) {
document.write(start); 
}