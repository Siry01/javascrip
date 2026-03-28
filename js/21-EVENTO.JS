function mOver (obj){
    obj.innerHTML = "Aprendiendo en 2024"
    const boton = document.querySelector("boton");
    boton.classList.add('red');
}

function displayDate(){
    document.getElementById("fecha").innerHTML = Date();
}

function saludar (){
    document.getElementById("saludo").innerHTML = "holaaa"
}

const calculadora = {
    sumar: function(n1,n2){
        suma = n1+n2;
        document.querySelector("#result").innerHTML = `La suma de a: ${n1} mas b ${n2}=${suma}`;
    },
     resta: function(n1,n2){
        suma = n1-n2;
        document.querySelector("result").innerHTML = `La resta de a: ${n1} menos b ${n2}=${resta}`;
    },
     multiplicar: function(n1,n2){
        suma = n1*n2;
        document.querySelector("result").innerHTML = `La multiplicacion de a: ${n1} por b ${n2}=${multiplica}`;
    },
     division: function(n1,n2){
        suma = n1/n2;
        document.querySelector("result").innerHTML = `La division de a: ${n1} entre b ${n2}=${divide}`;
    },

};