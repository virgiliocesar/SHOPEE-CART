//quais açõe meu carrinho pode fazer

//*CASOS DE USO
//& ✅ -> adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//& ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShoppe Cart! TOTAL IS:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁TOTAL IS:${result}`);
}


//& ✅ -> deletar item do carrinho
async function deleteItem(userCart, name) {
const index = userCart.findIndex((item)=> item.name === name);
if (index!==-1) {
    userCart.splice(index, 1);
}

}

//& ✅ ->remover um item - diminui um item
async function removeItem(userCart, item) {

    //?1.encontrar o indice
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //?2.verificar se o indice foi encontrado
    if (indexFound === -1) {
        console.log("Item not found");
        return
    }
    //?3.pegar o item e diminuir a quantidade
    if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity--;
        return;
    }
    //?4. verificar se a quantidade do item for zero para deletar
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return
    }

};

//&->remover um item por index
// async function removeItem(userCart, index) {
//     //?-> transformar o index do usuario, em index do backend
//     const deleteIndex = index -1
//     //?-> verifica sé o item é menor do que o tamanho do carrinho
//     if (deleteIndex >= 0 && deleteIndex < userCart.length) {
//       userCart.splice(deleteIndex, 1);
//     }

// };

//& ✅ -> mostrar o carrinho
async function displaycart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} X | Subtotal = ${item.subtotal()}`);
    })
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart
}