const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true
  },
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    require: true
  },
  userTaken: {
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
  active: {
    type: Boolean,
    require: true
  }
})