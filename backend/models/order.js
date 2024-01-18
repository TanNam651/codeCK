const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true
  },
  asker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  size: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  order_type: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    require: true
  },
  sold: {
    type: Boolean,
    require: true
  }
});

module.exports = mongoose.model("Order", orderSchema);