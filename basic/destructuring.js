// Desestructuración de Objects
const persona = {
  nombre: "Pedro",
  apellido: "Peres",
  pais: "Argentina",
  ciudad: "Buenos Aires",
};

//const nombre = persona.nombre;
//const pais = persona.pais;
// importa el nombre de la propiedad, tiene que ser el mismo que el nombre de la variable
const { nombre, pais } = persona;
console.log(nombre);
console.log(pais);

// Desetructuracion de Arrays
const details = ["Juan Peres", 123, "juan.peres@gmail.com"];
// esto va por posición
const [name, id, email] = details;

// Swapping de variables
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a);
console.log(b);
