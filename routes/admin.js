const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const product = [];

//admin/add-product (
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddPorduct: true 
    });
});


// after got POST method from add-product page
router.post('/add-product', (req, res, next) => {
     product.push({title: req.body.title});  //because the structure is {title: 'book'}   so the 'book'=req.body.title(coz it is {title:})
     res.redirect('/');
 });

//module.exports = router;
// becase I want to export my product now
exports.routes = router;
exports.product = product;