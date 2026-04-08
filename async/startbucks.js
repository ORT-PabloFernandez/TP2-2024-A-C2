// tiempos por tipo de cafe en Startbucks

const tiempoPreparacion = {
    "Espresso": 3000,
    "Americano": 4500,    
    "Latte": 6000,
    "Cappuccino": 5000,
    "Mocha": 7000
}

const pedidos = [
    { id: 1, tipo: "Espresso", cliente: "Juan" },
    { id: 2, tipo: "Latte", cliente: "María" },
    { id: 3, tipo: "Americano", cliente: "Pedro" }
];

function pedidosStartbucks(pedido, callbackCliente) {
    const tiempo = tiempoPreparacion[pedido.tipo];
    console.log(` Pedido recibido: ${pedido.tipo} para ${pedido.cliente}. Tiempo de preparación: ${tiempo / 1000} segundos.`);
    if(!tiempo) {
        console.log(`Tipo de café no reconocido: ${pedido.tipo}. No se puede preparar.`);
        return;
    }
    setTimeout(() => {
        console.log(` Pedido listo: ${pedido.tipo}`);
        callbackCliente(pedido.cliente);
    }, tiempo);
}

const callbackCliente = (cliente) => {
    console.log(` Notificación para ${cliente}: Tu pedido está listo. ¡Disfruta tu café!`);
}

pedidos.forEach(pedido => {
    pedidosStartbucks(pedido, callbackCliente);
});
