
const fs = require("fs");

const readableStream = fs.createReadStream("hello.txt");

var data='';

readableStream.on('data', (chunk)=>{
    data+=chunk;
    console.log(chunk);
});

readableStream.on('end', ()=>{
    console.log(data);
});