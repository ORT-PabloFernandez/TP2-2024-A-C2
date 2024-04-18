// asincrono cuando no espera la terminación de ejecución de una setencia de codigo
// setTimeout(() => {
//   console.log("Despues de 4 segundos");
// }, 4000);

// console.log("Pasaron 4 segundos?");

// setInterval(() => {
//   console.log("cada dos segundos...");
// }, 2000);

// Hola mundo cada segundo solo 5 veces
let i = 0;
const timerId = setInterval(() => {
  console.log("hola mundo");
  i++;
  if (i >= 5) {
    clearInterval(timerId);
  }
}, 1000);
