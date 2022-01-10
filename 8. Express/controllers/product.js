const Product = require("../models/product")

const dbRepo = require("../repositories/productMongodb");

// Read operation
exports.getProducts = (req, res)=>{
    console.log("Get Products called");
    dbRepo.getAll((items)=>{
        res.render('list-product', {products: items})
    })
}

exports.getAddForm = (req, res)=>{
    res.render('add-product');
}

exports.getUpdateForm = (req, res)=>{
    var id = req.query.id;
    dbRepo.get(id, (_product)=>{
        res.render('update-product', {product: _product});
    })
}

exports.addProduct = (req, res)=>{
    const product = new Product(null,req.body.name, req.body.detail, req.body.price);
    dbRepo.add(product, ()=>{
        dbRepo.getAll((items)=>{
            res.render('list-product', {products: items})
        })
    })
}

exports.updateProduct = (req, res)=>{
    const product = new Product(req.body.id,req.body.name, req.body.detail, req.body.price);
    dbRepo.update(product, ()=>{
        dbRepo.getAll((items)=>{
            res.render('list-product', {products: items})
        })
    })
}