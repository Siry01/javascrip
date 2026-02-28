"user strict";
function porConsola(n1,n2){

    console.log("La suma es " + (n1+n2));
    console.log("La resta es " + (n1-n2));
    console.log("La multiplicación es " + n1*n2);
    console.log("La division es " + n1/n2);
    console.log("****************** ");
}

/*function calculadora(n1,n2){
console.log(`La suma cal es ${n1+n2}`);  
console.log(`La resta cal es ${n1-n2}`);
console.log(`La multiplicación  cal es ${n1*n2}`);
console.log(`La division cal es ${n1/n2}`);
console.log("************ ")
}
calculadora(45, 50); /*argumento*/
/*porConsola(20,45);*/ /*invoco a la funion y le paso los argumentos es decir los valores*/

function porPantalla(n1,n2){
    suma += "la suma de dos números es: " + (n1+n2);
    document.getElementById("suma").innerHTML = suma;

    resta += "la resta de dos números es: " + (n1-n2);
    document.getElementById("resta").innerHTML = resta;

    multi += "la multiplicación de dos números es: " + (n1*n2);
    document.getElementById("multi").innerHTML = multi;

    divi += "la división de dos números es: " + (n1/n2);
    document.getElementById("divi").innerHTML = divi;
}
/*porPantalla(15,55)*/

function calculadora(n1, n2, mostrar = false) {

    if (mostrar == false){
        porConsola(n1,n2);
    } else {
        porPantalla(n1,n2);
    }
    return true;
}
calculadora(5, 10, true);