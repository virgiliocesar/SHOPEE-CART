//quais açõe meu carrinho pode fazer

//*CASOS DE USO
//&->adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//& ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}


//&->deletar item do carrinho
async function deleteItem(userCart, name) {
}

//&->remover um item - diminui um item
async function removeItem(userCart, index) {
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal
}