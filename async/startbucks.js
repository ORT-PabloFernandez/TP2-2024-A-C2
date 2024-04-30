const Pedido1 = { tipo: "Café Vainilla", cliente: "Juan" };
const Pedido2 = { tipo: "Té helado", cliente: "Claudia" };

function pedidosStartbucks(pedido, callbackcliente) {
  switch (pedido.tipo) {
    case "Café Vainilla":
      setTimeout(() => {
        callbackcliente(pedido.cliente);
      }, 4000);
      break;
    case "Té helado":
      setTimeout(() => {
        callbackcliente(pedido.cliente);
      }, 2000);
      break;
    default:
      break;
  }
}

const callbackcliente = function (cliente) {
  console.log("Llamar a cliente:" + cliente);
};

pedidosStartbucks(Pedido1, callbackcliente);
pedidosStartbucks(Pedido2, callbackcliente);

console.log("PEDIDOS STARTBUCKS");
