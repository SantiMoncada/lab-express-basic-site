const express = require('express')
const { join } = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))


//connect to the DB
require('./db')

// Model
const Product = require('./models/Product.model')

app.get('/', (req, res) => {

    res.render("home")
})

app.get('/tienda', (req, res) => {

    Product
        .find()
        .select({ title: 1, thumbnail: 1, description: 1, price: 1 })
        .sort({ price: 1 })
        .then(products => {
            res.render("tienda", { products });
        })
        .catch(err => console.log(err));
})

app.listen(5005, console.log('SERVER RUNNING ON PORT 5005'))