import { ShoppingCart } from "./shopping";

const spCart = new ShoppingCart();
spCart.addItem({ name: "Caderno", price: 7 });
spCart.addItem({ name: 'test', price: 9999});
spCart.addItem({ name: "Lapis", price: 1.25 });
spCart.addItem({ name: "Apontador", price: 3 });
spCart.items;
console.log(spCart.total());
spCart.checkout();