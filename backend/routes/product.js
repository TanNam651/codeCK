const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/role_list')

router.route('/')
  .get(productController.getAllProduct)
  .post( productController.createNewProduct)
  .put( productController.updateProduct)
  .delete( productController.deleteProduct);

router.route('/:productId')
  .get(productController.getProduct);

module.exports = router;