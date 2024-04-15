const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

<<<<<<< HEAD
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
=======
mongoose.connect('mongodb://localhost:27017/dogs', { useNewUrlParser: true, useUnifiedTopology: true })
>>>>>>> d2420d44bb148a9c985250a5b2c18be058680052
.then(() => {
    console.log('Mongo Connection Open!');
})
.catch(err => {
    console.log('Mongo Connection Error!');
    console.log(err);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));

app.get('/product', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
    res.render('products/new');
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct)
    res.send('Making a new product!');
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/show', { product });
})

=======

app.get('/dog', (req, res) => {
    res.send('Woof!');
});

>>>>>>> d2420d44bb148a9c985250a5b2c18be058680052
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});