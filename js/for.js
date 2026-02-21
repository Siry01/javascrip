const ciudad = ["Maracay", "Caracas", "La Guaira", "San Juan", "Valencia"];

for (let i=0; i<ciudad.length; i++){
    console.log(ciudad[i]) + "</br>";
}


let text = "";
for (let x=0; x<=100; x++) {
    text += "el numero es" + x + "</br>";
}
document.getElementById("numero").innerHTML = text;