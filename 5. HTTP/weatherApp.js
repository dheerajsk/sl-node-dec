// Problem Statement
// Create a html page to take city name as input and for 
// that city return weather information.

// 1. Import http module in this httpServer module
const httpModule =require("http");
const httpsModule = require("https");

// 2. Create HTTP Server and listen to client
httpModule.createServer((req, res)=>{
    // This is weather form post request
    if(req.url=="/weather" && req.method=="POST"){
        const body=[];
        // Reading request body
        req.on('data', (chunk)=>{
            body.push(chunk);
        });
        // Request ends
        req.on('end', ()=>{
            // Parse Body
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const city = parsedBody.replace("city=","");
            // Send request to weather api
        httpsModule.get('https://api.weatherapi.com/v1/current.json?key=b938ad58852b4e4f86631748202111&q='+city, (weatherRes)=>{
            // Reading response from weather api
            let responseData='';
            // Reading chunks.
            weatherRes.on('data', (chunk)=>{
                responseData+=chunk;
            });
            weatherRes.on('end', ()=>{
                const parsedResponse = JSON.parse(responseData);
                console.log("Printing weather response");
                console.log(parsedResponse);
                return res.end(responseData);
            })
        }).on("error", (err)=>{
            console.log(err);
        });
    });
    }
    else if(req.url=="/weather" && req.method=="GET"){
        console.log("weather get");
        return res.end('<html><body><form method="POST" action="/weather"><h2>Enter City: </h2> <input type="text" name="city"/><button type="submit">Check</button></form></body></html>')
    }
    else{
        console.log("default");
        return res.end("You are connected");
    }


}).listen(3300);

console.log("Server is listening at 3300");
// localhost:3300/weather

