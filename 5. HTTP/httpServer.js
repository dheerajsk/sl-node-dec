// nodejs
// packages (core, external) 
// http (core modules)

// 1. Import http module in this httpServer module
const httpModule =require("http");

// 2. Create HTTP Server and listen to client
httpModule.createServer((req, res)=>{
    res.end("<h1>Hello, you are connected to NodeJs Server</h1>");
}).listen(3300);

console.log("Server is listening at 3300");

