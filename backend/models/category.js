const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name_category: {
    type: String,
    require: true
  },
  slug_category: {
    type: String,
    require: true,
    unique: true
  },
  parentId: {
    type: String
  }
});

module.exports = mongoose.model("Category", categorySchema);