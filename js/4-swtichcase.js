var date = 1979;
switch (true) {
    case date== 1980:
    console.log("son milenials");
    break; //palabra reservada para romper el switch

    case date >=2000 && date <= 2014:
        console.log("yo soy generacion z");
        break;
    case date <= 1980:
        console.log("yo soy generacion x");
        break;
}

var ciudad = "caracas";

switch (true){
    case ciudad == "caracas":
        console.log("soy de caracas");
        break;

    case ciudad == "brasilia":
        console.log("soy de brasilia");
        break;

    case ciudad == "madrid":
        console.log("soy de madrid");
        break;

    default:
        console.log("ciudad no reconocida");
}

// en caso sea de caracas diga soy caraque; o en caso sea madri soy madrice;

var usuario = "Jesus";
var password = "1234";
var rol = "Estudiante";

switch (true) {

    case usuario === "" && password === "" && rol === "" :
        console.log("Debe ingresar usuario y contraseña");
        break;

    case usuario == "Siry" && password == "1234" && rol == "Administrador" :
        console.log("Bienvenido Administrador, tienes acceso total al sistema ");
        break;

    case usuario == "Jesus" && password == "1234" && rol == "Estudiante" :
        console.log("Bienvenido estudiante, tienes acceso al sistema ");
        break;

    case usuario == "Carlos" && password == "1234" && rol == "Profesor" :
        console.log("Bienvenido profesor, tienes acceso al sistema ");
        break;

    case usuario == "Alexander" && password == "1234" && rol == "Gerente" :
        console.log("Bienvenido Gerente, tienes acceso al sistema ");
        break;

         default:
        console.log("Rol no válido");
}