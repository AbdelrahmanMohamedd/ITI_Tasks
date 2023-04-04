const fs = require("fs");
const http = require("http"); 

http.createServer((req,res)=>{
    if(req.url != "/favicon.ico"){
        var ArrofURLparts=req.url.split('/')
        console.log(req.url);
        console.log(req.method);
        console.log(ArrofURLparts)
        // console.log(ArrofURLparts.length)
        var Calculation = +ArrofURLparts[2];
            for(let i=3 ; i<ArrofURLparts.length ; i++){
                if(ArrofURLparts[1] == "add")  Calculation += parseInt(ArrofURLparts[i]);
                if(ArrofURLparts[1] == "sub")  Calculation -= parseInt(ArrofURLparts[i]);
                if(ArrofURLparts[1] == "mul")  Calculation *= parseInt(ArrofURLparts[i]);
                if(ArrofURLparts[1] == "div")  Calculation /= parseInt(ArrofURLparts[i]);
            }
        fs.writeFileSync("CalculatorRes.txt",`Result is ${Calculation}` , ()=>{} )
        console.log(`Result is ${Calculation}`);
        res.end();
    }
}).listen("7000",()=>{console.log("http://localhost:7000")})

