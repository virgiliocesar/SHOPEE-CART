//*CASOS DE USO DOS ITENS

//& ✅ -> criar item com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity,
        subtotal: () => price * quantity
    }

}

export default createItem