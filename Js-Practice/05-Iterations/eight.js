//reduce()

const array1 = [1, 2, 3, 4]

//0+1+2+3+4
const initilValue= 0
const sumWithInitial = array1.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, initilValue );

console.log(sumWithInitial)//10


//using arrow function

const array2 = [12, 13, 14, 15, 16, 17]

const sumArrow = array2.reduce((acc, currVal) => (acc+currVal), 0)

console.log(sumArrow)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 2099
    },
    {
        itemName: " react js course",
        price: 21999
    },
    {
        itemName: "dsa course",
        price: 12999
    },
]

const addCart = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(addCart)