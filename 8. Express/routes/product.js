
// 1. Import express
const express = require("express");
const productController = require("../controllers/product");

//2. CReate Router
const router = express.Router();

//3. Configure router
router.get('/', productController.getProducts);
router.get('/add', productController.getAddForm);
router.post('/add', productController.addProduct)

module.exports = router;