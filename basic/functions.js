// Tipos de declaracion de funciones
// la forma tradicional
function add(a, b) {
  return a + b;
}

function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}
// console.log(`Importe total: ${calculateBill(100, undefined, 0.25)}`);
// console.log(`Importe total: ${calculateBill(100)}`);

function calculateBill2() {
  let [total, tax, tip] = arguments;
  console.log(arguments);
  return total + total * tax + total * tip;
}

console.log(calculateBill2(100, 0.13, 0.15, "hola mundo", 90));

// asignar una funcion a una variable

//console.log(square(2));

function MiFuncionPrincipal(a, b) {
  // llamada de a como funcion
  a();

  return b;
}

MiFuncionPrincipal(square, 6);

// Arrow Function
const square = function (x) {
  //console.log("Se invoco a square");
  return x * x;
};

// const square2 = (x) => {
//     return x * x;
// }

const square2 = (x) =>
  ({
    x: 3,
    y: 2,
  }(3));
