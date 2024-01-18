const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true
  },
  asker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    require: true
  },
  taker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    require: true
  },
  size: {
    type: Number,
    require: true
  },
  prince: {
    type: Number,
    require: true
  },
  fee: {
    type: Number,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    require: true
  }
});

module.exports = mongoose.model("Authenticate", authSchema);