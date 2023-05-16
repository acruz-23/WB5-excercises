let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Snickers", price: 4.79 },
  { product: "Pretzel M&Ms", price: 3.89 },
  { product: "Twix", price: 3.89 },
  { product: "Sour Patch Kids", price: 4.0 },
];

let candyUnder4 = products.filter((candy) => candy.price < 4);
candyUnder4.forEach((candy) => console.log(candy));
console.log("-".repeat(30));
let mmCandy = products.filter((candy) => candy.product.indexOf("M&M") != -1);
mmCandy.forEach((candy) => console.log(candy));

let haveSweedishFish = products.find(
  (candy) => candy.product === "Swedish Fish"
);
console.log("Sweedish Fish in inventory:", haveSweedishFish);
