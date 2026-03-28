var rol = "admin";

switch (true) {

    case rol == "admin":
        console.log("eres administrador");
        break;
    
     case rol !== "editor":
        console.log("no tienes acceso a diferente");
        break;

     case rol == "invitado":
        console.log("solo puedes leer");
        break;

}
const estudiantes = ["Maria", "pedro", "juan", "pablo", "romeo", "julieta", "Carlos", "Javier"];
let estudiante = "";
for (let i=0; i <= estudiantes.length; i++){
    estudiante += "El estudiante se llama " + estudiantes[i] + "</br>";
    console.log(estudiantes[i]) + "</br>";
}
document.getElementById("estudiantes").innerHTML = estudiante;