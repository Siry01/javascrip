function listadoFrutas(fruta1, fruta2, ...todasfrutas){
   console.log("La fruta 1 es ", fruta1); 
   console.log("La fruta 2 es", fruta2);
   console.log(todasfrutas);
}

//PARAMETROS REST
listadoFrutas("fresa", "mora", "sandia", "pera");

var frutas2 = ["naranja", "manzana", "kiwi"]; //array
//parametro SPREAD //convierto un arreglo en un parametro
listadoFrutas(...frutas2, "fresa", "mora", "sandia", "pera");