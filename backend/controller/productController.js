const Slugfy = require('slugify')
const Product = require('../models/product');

const createNewProduct = async (req, res) => {
  try {
    const { name, brand, retail_price, release_date, img_path, description, category } = req.body;
    const newProduct = new Product({
      name,
      brand,
      retail_price,
      slug: Slugfy(name),
      release_date,
      img_path,
      description,
      category
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) return res.status(400).json({ 'message': `Products not found!` });
    res.json(product);
    
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ 'message': 'ID parameter is required!' });
  }
  const product = await Product.findOne({ _id: req.body.id }).exec();

  if (!product) {
    return res.status(204).json({ 'message': `No product matches ID ${req.body.id}.` });
  }
  if (req.body?.name) product.name = req.body.name;
  if (req.body?.brand) product.brand = req.body.brand;
  if (req.body?.retail_price) product.retail_price = req.body.retail_price;
  if (req.body?.release_date) product.release_date = req.body.release_date;
  if (req.body?.description) product.description = req.body.description;
  if (req.body?.img_path) product.img_path = req.body.img_path;
  if (req.body?.category) product.category = req.body.category;
  
  const result = product.save();
  res.json(result);
};

const deleteProduct = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ 'message': 'Product id required!' });

  const product = await Product.findOne({ _id: req.body.id }).exec();
  if (!product) {
    return res.status(204).json({ 'message': `No product matches ID ${req.body.id}` });
  }

  const result = await product.deleteOne({ _id: req.body.id });
  res.json(result);
};

const getProduct = async (req, res) => {
  if (!req.params.productId) return res.status(400).json({ 'message': `Product ID required!` });
  const product = await Product.findOne({ _id: req.params.productId }).exec();
  if (!product) {
    return res.status(204).json({ 'message': `No product matches ID ${req.params.productId}` });
  }
  res.json(product);
};

module.exports = {
  getAllProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  createNewProduct
};