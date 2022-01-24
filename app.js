const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express(); 
 
// Use EJS Engine 
app.set('view engine', 'ejs');
app.set('views', 'views');   

const adminRoutes = require('./routes/admin'); 
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');
// Parse the data    
app.use(bodyParser.urlencoded({extended: false}));

// Add files statically
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


// Add 404 page
app.use(errorController.get404);
 
app.listen(3000);