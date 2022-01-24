const path =  require('path');
const express = require('express');

//const rootDir = require('../util/path');  // use it for res.sendFile()
//const adminData = require('./admin');  // because I have product=[] in my /controllers/products.js

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router; 