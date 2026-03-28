
var Opcion = prompt('Deseas registrar tarea realizada? (si/no)', 'si');


const lista = [ 
    {Id: 1, Nombre: "Fregar", Estado: "Realizada"},
    {Id: 2, Nombre: "Lavar", Estado: "Realizada"},
    {Id: 3, Nombre: "Planchar", Estado: "Realizada"}, 
];


var Total = 0;

function Mostrar_lista(lista){
    console.log("===== LISTA DE TAREAS =====");
    for (let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }
}

function Registrar_Estado(){
    var Id_lista = parseInt(prompt('Ingrese el id de la Tarea (1-4)', 1));

 
    let lista_Seleccionada =lista.find(l => l.Id === Id_lista);

    if(lista_Seleccionada){

        if(lista_Seleccionada.Estado !== "Realizada"){
            console.log("⚠️ Esa tarea ya esta realizada");
        } else {

            var Estado = parseFloat(prompt('Ingrese la tarea', ""));

          
          lista_Seleccionada.Estado = Estado;

         
            Total += Estado;

            console.log(`Agregaste ${Estado} a ${lista_Seleccionada.Nombre}`);
        }

    } else {
        console.log("❌ Id no valido");
    }
}



if(Opcion == "si"){

    var Continuar = "si";

    while(Continuar == "si"){
        Mostrar_lista(lista);
        Registrar_Estado();

        Continuar = prompt('Deseas agregar otra Tarea? (si/no)', 'si');
    }

  
    console.log("===== TAREAS REGISTRADAS =====");
    lista.forEach((lista) => 
        console.log(`lista: ${lista.Nombre} Estado: ${lista.Estado}`)
    );

 let Tarea = ver_Tarea(lista);

    console.log(`El total de estados es: ${Total}`);

    console.log(`El total de tareas es: ${Total}`);

  
    const Estado_Ajustadas = lista.map(function(lista){
        return `Tarea: ${lista.Nombre}, Estado: ${lista.Estado + 1}`;
    });

    console.log("===== Lista actualizada =====");
    console.log(Estado_Ajustadas);

   
    if(Tarea = "realizada"){
        console.log("✅ Tarea fue realiada");
    } else {
        console.log("❌ no se ha realizado");
    }

} else {
    console.log('No quiso registrar la tarea');
}