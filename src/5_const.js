/* const is a way to declare a var that doesn't change during execution */

function totalPrice(quantity, price) {
    return quantity * price;
};

const PRICE_IN_EUR=9.90;
let itemsQuantity=3;
itemsQuantity++;
console.log(totalPrice(itemsQuantity,PRICE_IN_EUR));
