const Product = require("../models/product")


// Read operation
exports.getProducts = (req, res)=>{
    console.log("Get Products called");
    res.status(200).send(Product.getAll())
}