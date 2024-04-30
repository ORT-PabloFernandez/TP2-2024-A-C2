// Las promesas en js es un objeto que requiere dos callbacks resolve y reject
// se ejecuta el resolve cuando se cumple la promera, y cuando no se llama el reject

// Ej. suma asincrona

function sumarAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number" || typeof b !== "number") {
        reject(new Error("Ambos parametros tienen que ser numericos"));
      } else {
        resolve(a + b);
      }
    }, 1000);
  });
}

// En una promesa se puede llamar una funcion then, pasandole a su vez un callback

sumarAsync(5, 3)
  .then((data) => {
    console.log("resultado:", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

//const resultado = sumarAsync(5, 3);
//console.log(resultado);
