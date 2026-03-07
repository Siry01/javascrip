var compras = prompt ('deseas comprar', 'si');
const catalogo= [ 
{id: 1, producto: "camisa", precio: 1000},
{id: 2, producto: "pantalon", precio: 1500},
{id: 3, producto: "zapato", precio: 2000},    
]

if(compras=="si"){
    mostarCatalogo(catalogo);
} else {
    console.log('NO QUIERO COMPRAR ESTOY ENDEUDADO');
}
function mostarCatalogo(catalogo){
    //console.log(catalogo);
    for (let i = 0; i < catalogo.length; i++){
        console.log (catalogo[i]);

    }

    var compras2 = prompt ('Ingrese un id del producto a comprar entre: 0, 1 y 2', 0,);
    console.log(`haz agregado al carrito el producto con el id ${compras2}`);
}



//ejercicio 2
var total = 0;
function agregarCarrito (precio) {
    return (total += precio);
}

function calcularImpuesto(total) {
    return (impuesto = total * 1.16);//cada ves
}

total = agregarCarrito(300);
agregarCarrito(600);
agregarCarrito(1200);

impuesto = calcularImpuesto(total);

console.log(`El total a pagar es ${total} y el total mas el impuesto es ${impuesto}`,
);
//document.write(`El total a pagar es ${total} y el total mas el impuesto es ${impuesto}`);