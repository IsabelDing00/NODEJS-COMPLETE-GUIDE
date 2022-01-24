const path = require('path');
const express = require('express');

// const rootDir = require('../util/path');   // use it when I use sendFile()
const productsController = require('../controllers/products');
const router = express.Router();



//admin/add-product (
router.get('/add-product', productsController.getAddProduct);


// after got POST method from add-product page
router.post('/add-product', productsController.postAddProduct);

//module.exports = router;
// becase I want to export my product now
module.exports = router;

// exports.product = product;  // because I am going to use this in the /controllers/products.js 