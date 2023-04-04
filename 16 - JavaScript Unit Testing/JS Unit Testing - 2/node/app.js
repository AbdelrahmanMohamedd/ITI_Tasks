const express = require("express");
const app = express();

app.get("/",(req,res)=>{
res.status(200).send("hello world")
})

app.get("/node",(req,res)=>{
res.status(200).send("Hello MEARN iTi CAIRO")
})

var server = app.listen(3000);
module.exports = server