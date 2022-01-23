const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express(); 

// Use express-Handlebars Engine
// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts', 
//     defaultLayout: 'main-layout',
//     extname: 'hbs'}));
// app.set('view engine', 'hbs');  

// Use Pug Engine
//app.set('view engine', 'pug');
 
// Use EJS Engine 
app.set('view engine', 'ejs');
app.set('views', 'views');   

const adminData = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

// Parse the data    
app.use(bodyParser.urlencoded({extended: false}));

// Add files statically
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);


// Add 404 page
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Error Page'});
});
 
app.listen(3000);