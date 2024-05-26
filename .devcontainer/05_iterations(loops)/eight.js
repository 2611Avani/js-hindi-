// reduce methid 

/*
const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce(function (acc, currval) {

    console.log(`acc: ${acc}, currval: ${currval} and (acc + currval): ${acc+ currval}`);

    return acc + currval

}, 0)

console.log(myTotal);
*/

// using arrow fn for the same 

/*
const myNums = [1, 2, 3, 4, 5]

const myTotal = myNums.reduce((acc, currval) => {return acc + currval}, 0)


console.log(myTotal);
*/

// more examples using reduce method 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 12999
    },
]

const priceToPay= shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(priceToPay);