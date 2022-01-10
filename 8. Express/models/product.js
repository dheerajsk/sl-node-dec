
// Product Model with properties
const products=[];

module.exports = class Product{
    constructor(id, name, detail, price){
        this._id = id;
        this.name = name;
        this.detail = detail;
        this.price = price;
    }

    static getAll(){
        return products;
    }

    static add(product){
        products.push(product);
    }

    static update(product){
        const index = products.findIndex(p=> p.name==product.name);
        products[index]=product;
    }
}

