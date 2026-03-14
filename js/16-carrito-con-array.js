//Supongamos que creamos un carrito de compras desde la consola,
// mas adelante lo haremos ya desde una interfaz web.
const carrito =[];

// añadir un elemento al carrito...
const producto ={
    nombre:'Monitor 20 Pulgadas',
    precio: 500,
};

const producto2={
    nombre: 'Celular',
    precio: 500,
};

const producto5 ={
    nombre:'Iphone',
    precio:500,
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto5);

//añadir al inicio del carrito...

const producto3 ={
    nombre:'Teclado',
    precio:50,
};
carrito.unshift(producto3);

console.log(carrito);