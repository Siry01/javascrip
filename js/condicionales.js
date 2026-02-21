var edad = 19;
var nombre = "pedro";
var ciudad = "maracay";

/*if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años y es mayor de edad ");
} else {
    console.log(nombre + " tiene " + edad + " años y es menor de edad ");
}*/

if (edad >= 18 || ciudad == "san juan") {
    console.log(`el estudiante ${nombre} tiene ${edad} años y es mayor de edad y vive en ${ciudad}`,);
} else {
    console.log(` el estudiante ${nombre} tiene ${edad} años y  vive en ${ciudad}`,);
}

var n1= 25;
var n2= 50;
console.log(" la suma de " + n1 + " mas " + n2 + " es igual a " + (n1 + n2));

console.log(" la resta de " + n1 + " mas " + n2 + " es igual a " + (n1 - n2));

console.log(" la multiplicacion de " + n1 + " mas " + n2 + " es igual a " + (n1 * n2));

console.log(" la  division de " + n1 + " mas " + n2 + " es igual a " + (n1 / n2));

/* template literales */ /* nueva manera de hacerlo */

console.log(`la suma de ${n1} mas ${n2} es igual a ${n1 + n2}`); 

console.log(`la resta de ${n1} mas ${n2} es igual a ${n1 - n2}`); 

console.log(`la multiplicacion de ${n1} mas ${n2} es igual a ${n1 * n2}`);

console.log(`la division de ${n1} mas ${n2} es igual a ${n1 / n2}`);