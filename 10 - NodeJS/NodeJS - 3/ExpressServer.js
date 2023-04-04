const bodyparser = require("body-parser")
const exp = require("express");
const path = require("path")
const fs = require("fs")
var welcomeHTML= fs.readFileSync("./welcome.html").toString()
var app = exp();
var PORT= process.env.PORT||7005;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



app.get("/",(request,response)=>{
    response.setHeader("content-type","text/html");
    response.sendFile(path.join(__dirname,"/main.html"))
})

app.get("/",(request,response)=>{
    response.setHeader("content-type","text/css");
    response.sendFile(path.join(__dirname,"/style.css"))
})

app.get("/",(request,response)=>{
    response.writeHead(200,"Success",{"content-type":"image/vnd.microsoft.icon"});
    response.sendFile(path.join(__dirname,"/favicon.ico"))
})


app.post("/welcome.html",(request,response)=>{
    var formData = request.body;
    fs.writeFile("clients.json",JSON.stringify(formData),()=>{});
    response.send(
    welcomeHTML.replace("{Name}",formData.Name)
                .replace("{Mobile}",formData.Mobile)
                .replace("{Email}",formData.Email)
                .replace("{Address}",formData.Address)
            )
    response.sendFile(path.join(__dirname,"/welcome.html"));
})


app.get("*",(request,response)=>{//Default Page
    response.send("Page Not Found");
})

app.listen(PORT,()=>{console.log("http://localhost:"+PORT)})