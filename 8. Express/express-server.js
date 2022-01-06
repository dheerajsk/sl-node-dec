
const express = require("express");
const bodyParser = require("body-parser");
const mongoDBConfig = require("./config/mongodb");

const productRoutes = require("./routes/product");

const server = express();

server.set("view engine", "pug");
server.set("views", "views");
mongoDBConfig.connect();

server.use(bodyParser.urlencoded({extended: false}));

server.get("/", (req, res)=>{
    res.end("Hello from ExpressJS");
});

server.use('/Product', productRoutes);

server.listen(3100, ()=>{
    console.log("Express is listening on port 3100");
});