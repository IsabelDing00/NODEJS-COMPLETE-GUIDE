const path =  require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.product;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProduct: products.length > 0,
        activeShop: true,
        productCss: true
    });  // Pug Engine doesn't need the hasProduct key-value
});

module.exports = router; 