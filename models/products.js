const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'data', 
    'products.json'
);

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);         // if I got error, I want to return an empty array
        }                   // if I got no error, i want to read the products form the file, 
        else {
            cb(JSON.parse(fileContent)); //this line incoming JSON data and give us back a JS array
        }
    });
}

// const products = [];
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);                      // push my new product=>this(this class) into products
            fs.writeFile(p, JSON.stringify(products), err => {   // JSON.stringify()  converts a JS value to a JSON string
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
       getProductsFromFile(cb);
    }
}