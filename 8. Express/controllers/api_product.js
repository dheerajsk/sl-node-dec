const Product = require("../models/product")

const dbRepo = require("../repositories/productMongodb");

exports.getProducts = (req, res)=>{
    dbRepo.getAll((items)=>{
        res.send(items);
    })
}

exports.addProduct = (req, res)=>{
    console.log(req.body);
    const product = new Product(null,req.body.name, req.body.detail, req.body.price);
    dbRepo.add(product, ()=>{
        dbRepo.getAll((items)=>{
            res.send(items);
        })
    })
}