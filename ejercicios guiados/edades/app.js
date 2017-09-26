var ageClass = function(age){
	age= Number(age);
	if (age % 1 !== 0 || age === NaN) {
		alert("Ingresa tu edad en un número entero")
		return"";
	}
	if(age >= 1 && age <= 3){
		return"Toddler";
	}else if(age <= 5){
		return"Preschool";
	}else if(age <= 12){
		return"Gradeschooler";
	}else if (age <=18) {
		return"Teen";
	}else if (age <= 21) {
		return"Young adult";
	}else{
		return"Adult";
	}
}
alert(ageClass(prompt("Ingresa tu edad")));
//
var userImput=prompt("Ingresa tu edad");
var classi = ageClass(userImput);
alert(classi);

