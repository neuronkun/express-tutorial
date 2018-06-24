var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shop');

var products = [
    new Product({
        imagePath: '../public/image/food/armor/armor_a.jpg',
        name: 'lemom',
        description: 'lemon and lime',
        price: 10000
    }),
];

var done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });  
}

function exit() {
    mongoose.disconnect();
}