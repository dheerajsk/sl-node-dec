
const buffer = new Buffer.alloc(100);

const result = buffer.write("Hello!");

console.log(buffer.toString('ascii'));

var bufferA = new Buffer.alloc(26);
for(var index=0; index<26; index++){
    bufferA[index]=index+97;
}
console.log(bufferA.toString('ascii'));
console.log(bufferA.toString('ascii', 23, 52));

