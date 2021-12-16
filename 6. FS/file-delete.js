const fs = require("fs");

// fs.unlinkSync("hello.text");

fs.unlink("hello.txt", (err)=>{
    if(err){
        console.log(err);
    }
});