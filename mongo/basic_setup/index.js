const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');

<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
=======
<<<<<<< HEAD
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
=======
>>>>>>> d93161f457cea18c81da8fbac4ef7201acab5696
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
app.use(methodOverride('_method'));
=======
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
>>>>>>> d93161f457cea18c81da8fbac4ef7201acab5696

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/product', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', { products });
});

<<<<<<< HEAD
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/show', { product });
})

app.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`/products/${product._id}`);
})

=======
>>>>>>> d2420d44bb148a9c985250a5b2c18be058680052
>>>>>>> d93161f457cea18c81da8fbac4ef7201acab5696
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});