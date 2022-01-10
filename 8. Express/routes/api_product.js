
// 1. Import express
const express = require("express");
const productController = require("../controllers/api_product");
const { get } = require("../repositories/productMongodb");

//2. CReate Router
const router = express.Router();

//3. Configure router
router.get('/', productController.getProducts);
router.post('/', productController.addProduct);
router.put('/', productController.addProduct);
router.delete('/', productController.addProduct);

// get, post, put, delete

module.exports = router;