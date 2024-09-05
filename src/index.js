import * as cartService from './services/cart.js';
import createItem from './services/itens.js';

const myCart = []
const myWhishlist = []

console.log("welcome to the your Shoppe");

//?criando 2 items
const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

//?adicionando 2 items no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//?deleta por index
// await cartService.removeItem(myCart, 1);

//? remove item até deletar por completo
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);

//?->delete 2 item do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

cartService.calculateTotal(myCart)