
const express = require("express");
const bodyParser = require("body-parser");
const mongoDBConfig = require("./config/mongodb");

const productRoutes = require("./routes/product");
const productapiRoutes = require("./routes/api_product");

const server = express();

server.set("view engine", "pug");
server.set("views", "views");
mongoDBConfig.connect();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.get("/", (req, res)=>{
    res.end("Hello from ExpressJS");
});

server.use('/api/Product', productapiRoutes)
server.use('/Product', productRoutes);

server.listen(3100, ()=>{
    console.log("Express is listening on port 3100");
});