let cart = [
  { item: "Bread", price: 3.29, quantity: 2 },
  { item: "Milk", price: 4.09, quantity: 1 },
  { item: "T-Bone Steak", price: 12.99, quantity: 2 },
  { item: "Baking Potato", price: 1.89, quantity: 6 },
  { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
  { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
  { item: "Apples", price: 0.66, quantity: 6 },
];

const inventoryNames = cart.map(getItemName);
function getItemName(product) {
  return product.item;
}
inventoryNames.sort();
inventoryNames.forEach(function (name) {
  console.log(name);
});

let cartSum = cart.reduce(getTotal, 0);

function getTotal(total, item) {
  return total + item.price * item.quantity;
}
console.log(cartSum);
