const express = require('express');
const app = express();
const Product = require('./models/Product.model')
require('./db-connections')

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)



app.get('/', (req, res) => {
    res.render('index')
})

app.get('/tienda', (req, res) => {
    Product
        .find()
        .sort({ price: 1 })
        .select({ title: 1, description: 1, price: 1, thumbnail: 1, })
        .then(allProducts => {
            res.render('shop-page', { products: allProducts })
        })
        .catch(err => console.log('Se produjo un error:', err))
})









app.listen(5009, () => console.log('🏃‍ on port 5009'));