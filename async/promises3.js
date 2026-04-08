// Las promesas en javascript son objetos que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante. 
// Permiten manejar operaciones asíncronas de manera más legible y estructurada, evitando el "callback hell" (anidamiento excesivo de callbacks).

// Ejemplo de uso de promesas para simular la preparación de café en una cafetería:

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

function prepararCafe(pedido) {
    return new Promise((resolve, reject) => {
        const tiempo = tiempoPreparacion[pedido.tipo];
        console.log(` Pedido recibido: ${pedido.tipo} para ${pedido.cliente}. Tiempo de preparación: ${tiempo / 1000} segundos.`);
        if(!tiempo) {
            reject(`Tipo de café no reconocido: ${pedido.tipo}. No se   puede preparar.`);
            return;
        }
        setTimeout(() => {
            console.log(` Pedido listo: ${pedido.tipo}`);
            resolve(pedido.cliente);
        }, tiempo);
    });
}

// pedidos.forEach(pedido => {
//     prepararCafe(pedido)
//         .then(cliente => {
//             console.log(` Notificación para ${cliente}: Tu pedido está listo. ¡Disfruta tu café!`);
//         })
//         .catch(error => {
//             console.error(` Error al preparar el pedido de ${pedido.cliente}: ${error}`);
//         });
// });

// Usando async/await para manejar las promesas de manera más legible:

async function procesarPedidos() {
    for (const pedido of pedidos) {
        try {
            const cliente = await prepararCafe(pedido);
            console.log(` Notificación para ${cliente}: Tu pedido está listo. ¡Disfruta tu café!`);
        } catch (error) {
            console.error(` Error al preparar el pedido de ${pedido.cliente}: ${error}`);
        }
    }
}

procesarPedidos();
