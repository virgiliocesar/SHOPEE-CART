import * as cartService from './services/cart.js';
import createItem from './services/itens.js';

const myCart = []
const  myWhishlist = []

console.log("Hello Shoppe");

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myWhishlist, item2);

console.log("Shoppe Cart! TOTAL IS:");
cartService.calculateTotal(myCart)