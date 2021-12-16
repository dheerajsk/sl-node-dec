
const fs = require("fs");


// Synchronous reading
let data="";
// data = fs.readFileSync("hello.text");

fs.readFile("hello.text", null, (err, dataResponse)=>{
    if(err){
        console.log(err);
    }else{
        data = dataResponse.toString();
        console.log(data);
    }
})

console.log(data.toString());
console.log("End of the file");