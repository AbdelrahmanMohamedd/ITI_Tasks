const http = require("http"); 
const fs = require("fs"); 
var mainHTML= fs.readFileSync("./main.html").toString()
var welcomeHTML= fs.readFileSync("./welcome.html").toString()
var favIcon = fs.readFileSync("./favicon.ico")
var obj={};
var OBJ={};

http.createServer(
    (request,response)=>{
        if (request.method == "GET"){ 
            switch(request.url){
                case "/":
                case "./main.html": 
                    response.setHeader("content-type","text/html");
                    response.setHeader("Access-Control-Allow-Origin","*")
                    response.write(mainHTML)
                break;
                case "./style.css":
                    response.setHeader("content-type","text/css")
                    response.setHeader("Access-Control-Allow-Origin","*")
                    response.write(style)
                break;
                case "./favicon.ico":
                    response.writeHead(200,"Success",{"content-type":"image/vnd.microsoft.icon"});
                    response.write(favIcon)
                break;
                default:
                    response.write("Page is not Found")
                break;
            }
            response.end("");
        }
        else if (request.method == "POST"){
            request.on("data", function(data){
                obj = data.toString().split("&");
                for ( var i=0 ; i<obj.length ; i++){
                    var property = obj[i].split("=")[0];
                    var value = obj[i].split("=")[1].replace(/\%40/g, "@");
                    OBJ[property]=value;
                }
                console.log(OBJ);
                fs.readFile('clients.json',(err)=>{
                    if(err) console.log(err);
                    else fs.writeFile("clients.json",JSON.stringify(OBJ),()=>{});
                });
            })
            request.on("end",()=>{
                response.write(
                    welcomeHTML.replace("{Name}",OBJ.Name)
                                .replace("{Mobile}",OBJ.Mobile)
                                .replace("{Email}",OBJ.Email)
                                .replace("{Address}",OBJ.Address)
                )
                response.end();
            })
            request.on("error",()=>{console.log("Erorr!");})
        } 
    }
).listen("7000",()=>{console.log("http://localhost:7000")})  