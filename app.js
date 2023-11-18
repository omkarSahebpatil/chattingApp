const express= require("express");
const socket = require("socket.io");
const app=express();  


app.get("/", (req,res)=>{
    res.sendFile("/index.html", {root: __dirname});
})

let port = process.env.PORT || 5000;

let Server = app.listen(port, () =>{
    console.log("listening to port "+port);
})

let io=socket(Server);

io.on("connection", (socket)=>{

    socket.on("createMsg", (data)=>{
        io.sockets.emit("createMsg", data);
    })
})
