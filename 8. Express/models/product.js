
// Product Model with properties
const products=[];

module.exports = class Product{
    constructor(id, name, detail, price){
        this.id=id;
        this.name = name;
        this.detail = detail;
        this.price = price;
    }

    static getAll(){
        products.push(new Product(1, "P1", "Test", 100));
        return products;
    }
}

