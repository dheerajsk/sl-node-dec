const fs = require("fs");

// try{
//     fs.appendFileSync("hello.text", "This is a new line appending");
// }catch(err){
//     console.log(err);
// }

fs.appendFile("hello.text", "this is asnyc append", null, (err)=>{
    if(err){
        console.log(err);
    }
})