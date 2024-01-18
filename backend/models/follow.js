const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const followSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true
  }
});

module.exports = mongoose.model("Follow", followSchema);