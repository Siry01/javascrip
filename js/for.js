const ciudad = ["Maracay", "Caracas", "La Guaira", "San Juan", "Valencia"];

for (let i=0; i<ciudad.length; i++){
    console.log(ciudad[i]) + "</br>";
}


let text = "";
for (let x=0; x<=100; x++) {
    text += "el numero es" + x + "</br>";
}


const telefonos = ["Tecno Spark", "Infinit", "Nokia", "Alcatel", "iphone", "Samsung","Redmi", "Honor"];
let telefono = "";
for (let i=0; i <= telefonos.length; i++){
    telefono += "el telefono mas vendida es " + telefonos[i] + "</br>";
    console.log(telefonos[i]) + "</br>";
}


const estudiantes = ["Maria", "pedro", "juan", "pablo", "romeo", "julieta"];
let estudiante = "";
for (let i=0; i <= estudiantes.length; i++){
    estudiante += "El estudiante se llama " + estudiantes[i] + "</br>";
    console.log(estudiantes[i]) + "</br>";
}


let num = 3;
let mult = "";
for (let y=0; y <=10; y++){
    mult += "El numero de multiplicar " + num+ "x" + y + "=" + num * y + "</br>";
}
document.getElementById("multi").innerHTML = mult;