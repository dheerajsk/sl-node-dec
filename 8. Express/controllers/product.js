const Product = require("../models/product")


// Read operation
exports.getProducts = (req, res)=>{
    console.log("Get Products called");
    res.render('list-product', {products: Product.getAll()})
}

exports.getAddForm = (req, res)=>{
    res.render('add-product');
}

exports.addProduct = (req, res)=>{
    const product = new Product(req.body.name, req.body.detail, req.body.price);
    Product.add(product);
    res.render('list-product', {products: Product.getAll()});
}