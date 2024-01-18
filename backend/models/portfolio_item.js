const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioItemSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true
  },
  size: {
    type: String,
    require: true
  },
  purchase_price: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("PortfolioItem", portfolioItemSchema);