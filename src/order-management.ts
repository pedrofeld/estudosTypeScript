enum OrderStatus {
    Pendente = "Pendente",
    Processando = "Processando",
    Concluido = "Concluído",
    Cancelado = "Cancelado"
}

type Payment = "Cartão" | "Boleto" | "Pix";

interface Order {
    id: string;
    products: string[];
    quantities: number[];
    status: OrderStatus;
    payment: Payment;
};


function placeOrder(order: Order, prices: {[key: string]: number}): number {
    let total = 0;
    for (let i = 0; i < order.products.length; i++) {
        const product = order.products[i];
        const quantity = order.quantities[i];

        if (product && quantity !== undefined) {
            total += (prices[product] || 0) * quantity;
        }
    }
    return total;
}

const order: Order = {
    id: "001",
    products: ["notebook", "mouse", "teclado"],
    quantities: [1, 2, 1],
    status: OrderStatus.Pendente,
    payment: "Cartão"
};

const prices = {
    notebook: 3000,
    mouse: 150,
    teclado: 200
};

const total = placeOrder(order, prices);
console.log(`Pedido ID: ${order.id}`);
console.log(`Status do pedido: ${order.status}`);
console.log(`Total do pedido: R$ ${total}`);