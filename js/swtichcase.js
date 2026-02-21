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

var usuario = "alex";
var password = "1234";
var rol = "admin";

switch (true) {

    case usuario === "" || password === "":
        console.log("Debe ingresar usuario y contraseña");
        break;

    case usuario !== "alex" || password !== "1234":
        console.log("Usuario o contraseña incorrectos");
        break;

    case rol === "administrador":
        console.log("Bienvenido Administrador, tienes acceso total");
        break;

    case rol === "inspector":
        console.log("Bienvenido Inspector, puedes revisar registros");
        break;

    case rol === "recursos humanos":
        console.log("Bienvenido Recursos Humanos, puedes gestionar empleados");
        break;

    default:
        console.log("Rol no válido");
}