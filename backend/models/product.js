const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  brand: {
    type: String,
    require: true
  },
  retail_price: {
    type: String,
    require: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  release_date: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true,
    trim: true
  },
  img_path: {
    type: String,
    // require:true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    require: true
  },
  quantity: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("Product", productSchema);