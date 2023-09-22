console.log("Iniciando")

const express = require("express");

const server = express();

server.get("/data",(req,resp) =>{
    resp.send(Date())
})

server.get("/aoba/:a/:b",(req,resp) =>{
    resp.send(req.params.a + req.params.b)
})

server.get("/aoba",(req,resp) =>{
    resp.send(req.query)
})


server.listen(8080,()=>{
    console.log("Consegui")
})