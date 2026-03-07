'use strict'; /* obligarnos a escribir javascript de forma correcta */
var n1= 15;
var n2= 25;
console.log(n1 + n2);

var n3= 100;
console.log(n3);
if (true) {
    n3= 150;
    console.log(n3);
}
console.log( " el valor de n3 como var es " + n3);

var nombre= "rosa";
console.log(nombre);
 
if (true) {
    nombre= "pedro";
    console.log(" el nombre del estudiante es " + nombre);

}
console.log(" el nombre del estudiante es " + nombre);

/* el alcance de una variable declarada con var es global mientras que una con let es dentro del bloque de la funcion donde se llame */

let ciudad= "san juan";
console.log(ciudad);

if (true) {
    let ciudad= "maracay";
    console.log( " es conocidad como la ciudad jardin " + ciudad);
}
 console.log( " es la capital del estado " + ciudad);
 
 ciudad= "valencia"; /* reasignar una variable let */
 console.log(ciudad);