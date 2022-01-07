const db = require("../config/mongodb");

exports.add = (product, callback)=>{
    const collection = db.getCollection("Products");
    collection.insertOne({name: product.name, detail: product.detail, price: product.price})
        .then(()=>{
            callback();
        })
}

exports.getAll = (callback)=>{
    const collection = db.getCollection("Products");
    collection.find().toArray()
        .then((products)=>{
            callback(products);
        });
}

