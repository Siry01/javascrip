'use strict';

window.addEventListener('load', function(){
    console.log('dom cargado');

    var formulario = document.querySelector('#formulario');

    /*SELECCIONAMOS LA CAJITA DE SECCION QUE SE LLAMA ALUMNOS Y LA OCULTAMOS*/
    var box = document.querySelector('.alumnos');

    box.style.display = 'none';

     formulario.addEventListener('submit', function(){
        //console.log('capturando formulario');
       /* var p_nombre = document.querySelector('#p_nombre');*/
        /* captura los datos y los almacena en una variable*/
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = parseInt(document.querySelector('#edad').value);

        /*VALIDACION*/

        if (nombre.trim()== null || nombre.trim().length==0){
           /* alert('el nombre no es valido');*/
             document.querySelector('#error_nombre').innerHTML ="el nombre no es valido."
              document.querySelector('#error_nombre').style.color="red";

              return false;     
        }
        else{
             document.querySelector('#error_nombre').style.display="none";
             /*ocultamols el mensa<je de error si todo va bien*/
        }
        if (apellido.trim()== null || apellido.trim().length==0){
            /*alert('el apellido no es valido');*/

             document.querySelector('#error_apellido').innerHTML = "el apellido no es valido";
             document.querySelector('#error_apellido').style.color="red";
             return false;
        }
        else {
            document.querySelector('#error_apellido').computedStyleMap.dispaly="none";
            /*ocultamos el mensaje de error si todo va bien*/
        }
        if (edad == null || edad <=0 || isNaN(edad)){
            document.querySelector('#error_edad').innerHTML="El edad no es valido";
            document.querySelector('#error_edad').style.color="red";
            alert ('la edad no es validad');
            return false;
        }
        else {
            document.querySelector('#error_edad').style.display="none";
            /*ocultamos el mensaje de error si todo va bien*/
        }
        box.style.display='block'; /*para hacer visible la caja de texto*/
        /*para seleccionar la etiqueta html del DOM donde quiero que se muestro los datos*/

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellido = document.querySelector('#p_apellido span');
        var p_edad = document.querySelector('#p_edad span');

        /*para mpstrar los datos*/

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad ;

        console.log(nombre, apellido, edad); /*imprimimos los datos en consola*/

        /*entrando en la funcion para capturar los datos*/
     }); 
});

function validarNombre(nombre) {
  // Permite letras, espacios, acentos, Ñ, guiones y apóstrofos
  const regex = /^-[A-Z]{1}[A-Za-zÑñÁáÉéÍíÓóÚú\s'-]+$/;
  return regex.test(nombre);
}
function validarEmail(email) {
  // Permite letras, espacios, acentos, Ñ, guiones y apóstrofos
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validarContraseña(contraseña) {
  // Permite letras, espacios, acentos, Ñ, guiones y apóstrofos
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(contraseña);
}

function validarEdad(edad) {
  // Permite letras, espacios, acentos, Ñ, guiones y apóstrofos
  const regex =/^(?:[0-9]|[1-9][0-9]|1[01][0-9]|120)$/;
    return regex.test(edad);
}

function validarFechaNacimiento(fechanacimiento) {
  // Permite letras, espacios, acentos, Ñ, guiones y apóstrofos
  const regex = /^(0[1-9]|[12][0-9]|3[01])[/-](0[1-9]|1[0-2])[/-](19\d\d|20\d\d)$/;;
  return regex.test(fechanacimiento);
}

console.log(validarFechaNacimiento("29/02/2020"))
console.log(validarNombre("María José ")); // true
console.log(validarNombre("Juan Carlos"));         // true
console.log(validarNombre("1234"));
console.log(validarEmail("hola@gamil.com"));
console.log(validarContraseña("Hola123$"));
console.log(validarEdad("22"));
console.log(validarEdad("122"));