// TAREA 2

var Opcion = prompt('Deseas registrar notas del estudiante? (si/no)', 'si');


const Materias = [ 
    {Id: 1, Nombre: "Matematica", Nota: 0},
    {Id: 2, Nombre: "Programacion", Nota: 0},
    {Id: 3, Nombre: "Base de Datos", Nota: 0},
    {Id: 4, Nombre: "Redes", Nota: 0}    
];


var Total = 0;

function Mostrar_Materias(Materias){
    console.log("===== LISTA DE MATERIAS =====");
    for (let i = 0; i < Materias.length; i++){
        console.log(Materias[i]);
    }
}


function Registrar_Nota(){
    var Id_Materia = parseInt(prompt('Ingrese el id de la materia (1-4)', 1));

 
    let Materia_Seleccionada = Materias.find(m => m.Id === Id_Materia);

    if(Materia_Seleccionada){

        if(Materia_Seleccionada.Nota !== 0){
            console.log("⚠️ Esa materia ya tiene una nota registrada");
        } else {

            var Nota = parseFloat(prompt('Ingrese la nota', 0));

          
            Materia_Seleccionada.Nota = Nota;

         
            Total += Nota;

            console.log(`Agregaste ${Nota} a ${Materia_Seleccionada.Nombre}`);
        }

    } else {
        console.log("❌ Id no valido");
    }
}


function Calcular_Promedio(Materias){
    let Cantidad = 0;

    Materias.forEach((Materia) => {
        if(Materia.Nota > 0){
            Cantidad++;
        }
    });

    return Total / Cantidad;
}


if(Opcion == "si"){

    var Continuar = "si";

    while(Continuar == "si"){
        Mostrar_Materias(Materias);
        Registrar_Nota();

        Continuar = prompt('Deseas agregar otra nota? (si/no)', 'si');
    }

  
    console.log("===== NOTAS REGISTRADAS =====");
    Materias.forEach((Materia) => 
        console.log(`Materia: ${Materia.Nombre} Nota: ${Materia.Nota}`)
    );

  
    let Promedio = Calcular_Promedio(Materias);

    console.log(`El total de notas es: ${Total}`);
    console.log(`El promedio del estudiante es: ${Promedio}`);

  
    const Notas_Ajustadas = Materias.map(function(Materia){
        return `Materia: ${Materia.Nombre}, Nota Ajustada: ${Materia.Nota + 1}`;
    });

    console.log("===== NOTAS AJUSTADAS =====");
    console.log(Notas_Ajustadas);

   
    if(Promedio >= 50){
        console.log("✅ El estudiante APROBO");
    } else {
        console.log("❌ El estudiante REPROBO");
    }

} else {
    console.log('No quiso registrar notas');
}