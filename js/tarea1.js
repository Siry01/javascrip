// TAREA 1
const Jugadores = [
    {Nombre: 'Siry', Puntaje: 1500},
    {Nombre: 'Carlos', Puntaje: 2300},
    {Nombre: 'Ana', Puntaje: 1800},
    {Nombre: 'Luis', Puntaje: 900}
];

Jugadores.forEach((Jugador) => 
    console.log(`Jugador: ${Jugador.Nombre} Puntaje: ${Jugador.Puntaje}`)
);

// usando map para crear un nuevo arreglo (por ejemplo duplicar puntaje)
const NuevoPuntaje = Jugadores.map(function(Jugador){
    return `Jugador: ${Jugador.Nombre}, Nuevo Puntaje: ${Jugador.Puntaje * 2}`;
});

console.log(NuevoPuntaje);