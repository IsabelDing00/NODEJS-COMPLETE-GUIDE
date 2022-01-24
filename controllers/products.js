const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',   // for navigation, active test
        formsCSS: true,
        productCSS: true,
        activeAddPorduct: true 
    });
};

exports.postAddProduct = (req, res, next) => {
    //products.push({title: req.body.title});  //because the structure is {title: 'book'}   so the 'book'=req.body.title(coz it is {title:})
    //req.body不是node默认提供的，需要载入middleware：body-parser才可以用req.body
    //https://www.cnblogs.com/Diamond-sjh/p/11324138.html
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', {
            prods: products, 
            pageTitle: 'Shop', 
            path: '/', 
            hasProduct: products.length > 0,
            activeShop: true,
            productCss: true
        });  // Pug Engine doesn't need the hasProduct key-value
    });
};