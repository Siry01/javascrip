//METODOS EN OBJETOS
// UN METODO ES UN A FUNCION DENTREO DE UNA PROPIEDAD DE UN  OBJETO 

/*const reproductor = {
    mostrar: function(nombre){
        console.log(`La cancion se llama .... ${nombre}`)
    },
    reproducir: function(id,nombre){
        console.log(`Reproduciendo cancion id ${id}`);
    },

    pausar: function(id){
        console.log(`Pausando... la cancion con el id ${id}`);
    },
    borrar: function(id){
        console.log(`borrando cancion con id ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }
}

reproductor.mostrar("Rock");
reproductor.borrar(15);
reproductor.crearPlaylist("Rock and Roll");
reproductor.reproducirPlaylist("Rock and Roll");*/

const moto = {
    marca: function(nombre, matricula){
        console.log(`La moto ${nombre} con matricula ${matricula} es marca Escuda `)
    },
     encender: function(nombre,matricula){
        console.log(`La moto ${nombre}, matricula ${matricula} esta encendida`);
    },
    croche: function(nombre){
        console.log(`El croche de la moto ${nombre} esta presionado, mete una velocidad`);
    },
    velocidad: function(numero){
        console.log(` La moto esta en ${numero} velocidad, puedes arrancar....`);
    },
    arrancar: function(nombre){
        console.log(`La moto ${nombre} arranco`);
    },
    frenar: function(nombre){
        console.log(`La moto ${nombre} freno`);
    }
}

moto.marca("Adventure", "AJD58HRF");
moto.encender("Adventure", "AJD58HRF");
moto.croche("Adventure");
moto.velocidad("Primera");
moto.arrancar("Adventure");
moto.frenar("Adventure");

const calculadora ={
    sumar: function (n1, n2){
        console.log(`La suma de a: ${n1} mas b: ${n2}=`, n1 + n2);
    },
    restar: function (n1, n2){
        console.log(`La resta de a: ${n1} mas b: ${n2}=`, n1 - n2);
    },
    multiplicar: function (n1, n2){
        console.log(`La multiplicacion de a: ${n1} mas b: ${n2}=`, n1 * n2);
    },
    division: function (n1, n2){
        console.log(`La division de a: ${n1} mas b: ${n2}=`, n1 / n2);
    },
   
}

calculadora.sumar(20, 50);
calculadora.restar(35, 68);
calculadora.multiplicar(85 , 47);
calculadora.division( 89, 52);