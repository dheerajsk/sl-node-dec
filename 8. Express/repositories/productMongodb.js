const { ObjectId } = require("mongodb");
const db = require("../config/mongodb");

exports.add = (product, callback)=>{
    const collection = db.getCollection("Products");
    collection.insertOne({name: product.name, detail: product.detail, price: product.price})
        .then(()=>{
            callback();
        })
}

exports.update = (product, callback)=>{
    const collection = db.getCollection("Products");
    collection.findOneAndUpdate(
        {_id: ObjectId(product._id)},
        {
            $set:{name: product.name, detail: product.detail, price: product.price}
        }).then(
            ()=>{
                callback();
            }
        )};

exports.getAll = (callback)=>{
    const collection = db.getCollection("Products");
    collection.find().toArray()
        .then((products)=>{
            callback(products);
        });
}

exports.get = (id, callback)=>{
    const collection = db.getCollection("Products");
    collection.findOne({_id: ObjectId(id)})
        .then((product)=>{
            callback(product);
        })

}

