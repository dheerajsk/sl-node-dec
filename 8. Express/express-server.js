
const express = require("express");
const productRoutes = require("./routes/product");

const server = express();

server.get("/", (req, res)=>{
    res.end("Hello from ExpressJS");
});

server.use('/Product', productRoutes);

server.listen(3100, ()=>{
    console.log("Express is listening on port 3100");
});