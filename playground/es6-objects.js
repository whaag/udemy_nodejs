// object property shorthand

const name = 'Juca Bala';
const userAge = 26;


const user = {
    name,
    age: userAge,
    location: 'home'
}

console.log(user);


// object destructuring

const product = {
    label: 'Red Note',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label: productLabel, stock, rating = 0} = product;
console.log(`${productLabel} has ${stock} in stock with rating ${rating}`);

const transaction = (type, {label, stock})  => {
    console.log(`${type} 1 ${label} of ${stock}`);
}

transaction('order', product);