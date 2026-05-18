const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

const Product = require('./models/Product');

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {

  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  });

  await newProduct.save();

  res.json(newProduct);
});

app.listen(5000, () => {
  console.log('Server Running On Port 5000');
});