
const MongoDbClient = require("mongodb").MongoClient;

const url = "mongodb+srv://test:test@cluster0.fapqz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var mongoclient;

exports.connect = ()=>{
    console.log("connecting...");
    MongoDbClient.connect(url)
    .then((client)=>{
        mongoclient = client;
        console.log("connected");
    }).catch(
        (err)=>{console.log(err);}
    );
}

exports.getCollection = (name)=>{
    return mongoclient.db('myFirstDatabase').collection(name);
}