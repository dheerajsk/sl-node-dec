const Product = require("../models/product")

const dbRepo = require("../repositories/productMongodb");

// Read operation
exports.getProducts = (req, res)=>{
    console.log("Get Products called");
    res.render('list-product', {products: Product.getAll()})
}

exports.getAddForm = (req, res)=>{
    res.render('add-product');
}

exports.getUpdateForm = (req, res)=>{
    var name = req.query.name;
    var productToUpdate = Product.getAll().find(p=> p.name==name);
    res.render('update-product', {product: productToUpdate});
}

exports.addProduct = (req, res)=>{
    const product = new Product(req.body.name, req.body.detail, req.body.price);
    dbRepo.add(product, ()=>{
        res.render('list-product', {products: Product.getAll()});
    })
}

exports.updateProduct = (req, res)=>{
    var productToUpdate = Product.getAll().find(p=> p.name==req.body.name);
    productToUpdate.detail = req.body.detail;
    productToUpdate.price = req.body.price;
    Product.update(productToUpdate);
    res.render('list-product', {products: Product.getAll()});
}