//arrays es una coleccion de tipos de datos
var nombre = 'jenny';

var alumnos = ['Daniela', 'Maria', 'Sofia', 'David'];

console.log(alumnos);
console.log(alumnos [1]);

//asi imprimo un a posicion en especifico de mi arreglo atentiendo que lo que
//esta entre los corchetes es el indice

//console.log(alumnos.legth);// para conocer el largo de mi arreglo

const frutas = ['mandarina', 'fresas', 'cambur', 'patilla', 'lechoza'];

for (var i=0; i<frutas.length; i++){
    //console.log(i)
    console.log(frutas[1]);
}

const frutas2 = ['mango', 'peras'];

console.log(frutas2, ...frutas);