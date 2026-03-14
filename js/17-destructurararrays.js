//Array destructuring - Al igual que los objetos algunas veces quieres crear la variable y


const numeros = [10,20,30,40,50];

//[primero, segundo, tercero] = [10,20,30];

//const [primero, segundo, tercero] = numeros;

//console.log(numeros);
//console.log(primero);


const x= [1,2,3,4,5];
const [y ,z,c] =  x;
//console.log(y);//1
//console.log(c);//2

// si quieres saltarte un  valor, pon una coma....

//ahora, como extraes todo los otres valores,
//digamos que solo quieres crear la primer variable, mantener el arreglo original...

const[primero, ,segundo, ...tercero] = numeros;
console.log(tercero);