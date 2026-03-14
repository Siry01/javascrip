const carrito = [
    {nombre:'Monitor 20 pulgadas', precio: 500},
    {nombre:'Television 50 pulgadas', precio: 700},
    {nombre:'Tablet', precio: 800},
    {nombre:'Audifonos', precio:500},
    {nombre:'Teclado', precio: 150},
    {nombre:'Celular', precio:750},
]

/*cost nuevoArray2 = carrrito.forEach ( funtion (productoo) {
return `Articulo: ${producto,nombre} Precio:${producto.precio}`;});*/

carrito.forEach((producto) => 
    console.log (`Articulo: ${producto.nombre} Precio: ${producto.precio}`));


const fruteria = [
    {nombre:'Mango', precio: 500},
    {nombre:'Tamarindo', precio: 700},
    {nombre:'Sandia', precio: 800},
    ];

fruteria.forEach((fruta) => 
    console.log (`Fruta: ${fruta.nombre} Precio: ${fruta.precio}`));

const anime = [
    {nombre:'Jujutsu', protagonista: 'Itadori', segundo_protagoinista: 'Sukuna'},
    {nombre:'One Piece', protagonista: 'Luffy', segundo_protagoinista:'Zoro'},
    {nombre:'Naruto', protagonista: 'Naruto Uzumaki', segundo_protagoinista:'Sasuke'},
    {nombre:'Black Clover',protagonista: 'Asta', segundo_protagoinista: 'Yuno'},
    {nombre:'Demon Slayer', protagonista: 'Tanjiro Kamado', segundo_protagoinista:'Muzan'},
    {nombre:'Los 7 pecados capitales', protagonista: 'Meliodas', segundo_protagoinista:'Elizabeth' },
]

anime.forEach((anime) => 
    console.log (`Anime: ${anime.nombre} Protagonista: ${anime.protagonista}, Segundo Protagonista: ${anime.segundo_protagoinista}`));


const nuevoArray = carrito.map(function (producto) {
    return `Articulo: ${producto.nombre}, Precio: ${producto.precio * 2}`;
} );
console.log(nuevoArray);