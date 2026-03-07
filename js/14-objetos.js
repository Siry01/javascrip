/*const curso = {
    nombre:  'programacion', //llave o propiedad ala caul se le asigna un valor
    duracion: '40 horas', //cada llave de ir separada por coma y el valor 
    //asignados con pun tos
    disponible: true,
    informacion: {
        modulos: 15,
        modalidad: {
            presencial: true,
            online: true
        }
    }
}

const { 
    nombre, duracion,
    informacion: {modulos}, 
    informacion,
    informacion: {
         modalidad:{presencial},
        },
         } = curso;
console.log(nombre, duracion );
console.log (modulos);
console.log(informacion);
console.log(presencial);*/

//curso.descripcion='apren de desde cero a programar' // agrego nuevas propiedades a mi objeto

//console.log(curso);

/*/const telefono = {
    marca:  'samsung',
    color: 'negro',
    ram: '16gb',
    rom: '512gb',
    disponible: true,
    caracteristicas: {
        
        metodo_pago: {
            divisa: true,
            bolivares: true
        }
    }
}

const { 
    marca, color,
    disponible,
    ram,
     rom, 
   caracteristicas: {
         
         metodo_pago:{divisa},
        },
         } = telefono;

console.log(marca);
console.log(color);
console.log(ram);
console.log(rom);
console.log(disponible);
console.log(divisa);*/


const Medico = {
    Nombre:  'Siry Pacheco',
    Cedula: '31023371',
    Edad: '22',
    Sexo: 'Femenino',
    Tipo_de_sangre: '+A',
    Telefono: '04142204963',
    Especialidad: 'Medico Cirujano',
    Hospital: 'Seguro Social San Jose',
    Informacion: {
       Turno: {
            Nocturno: true,
            Diurno: true,
        }
    }
 }

const { 
    Nombre, Cedula, Edad, Sexo, Tipo_de_sangre, Telefono, Especialidad, Hospital, Informacion:{
         Turno:{Nocturno},
        },
         } = Medico;

console.log(Nombre);
console.log(Cedula);
console.log(Telefono);
console.log(Edad);
console.log(Tipo_de_sangre);
console.log(Sexo);
console.log(Hospital)
console.log(Nocturno);

 Medico.Años_de_experiencia='3 Años'
delete Medico.Años_de_experiencia;
console.log(Medico);