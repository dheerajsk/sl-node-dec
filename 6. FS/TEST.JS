const fs = require("fs");

try {
    fs.writeFileSync("hello.txt","Contenido nuevo");
    fs.writeFile("hello.txt","Contenido nuevo", (err) => {
        if(err){
            console.log(err);
        }
    });
}catch(err) {
console.error(err)
}

try {
if (fs.existsSync("hello.txt")) {

data = fs.readFileSync("hello.txt");
console.log("1=" + data.toString());

// fs.readFile("hello.txt","UTF-8",  (err, dataResponse) =>{
// if(err){
//     console.log(err);
// }else{
//     data = dataResponse.toString();
//     console.log("2.-" + data);
// }
// });
}
} 
catch(err) {
console.error(err)
}
