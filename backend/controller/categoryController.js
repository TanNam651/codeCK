const Category = require('../models/category');

const createCategories = (categories, parentId = null) => {
  const categoriesList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId)
  }
  for (let cat of category) {
    categoriesList.push({
      _id: cat._id,
      name_category: cat.name_category,

    });
  }
  return categoriesList;
}

const addCategory = async (req, res) => {
  try {
    const categoryObj = {
      name_category: req.body.name_category,
    };
    if (req?.body?.parentId) {
      categoryObj.parentId = req.body.parentId;
    }
    const cat = new Category(categoryObj);
    cat.save();

    res.status(500).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
}

const getCategory = async (req, res)=>{
  try {
    const listCategory = Category.find();
    if (!listCategory) return res.status(400).json({ "message": "categories not found" });
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  createCategories,
  addCategory,
  getCategory
}