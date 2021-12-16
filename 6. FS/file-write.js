
const fs = require("fs");

// fs.writeFileSync("newfile.txt", "Hello world for new file");

fs.writeFile("newfileAsync.txt", "Hello world for new async file", (err)=>{
    if(err){
        console.log(err);
    }
});