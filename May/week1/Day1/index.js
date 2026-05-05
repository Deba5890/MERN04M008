
//this is for import  the express from  the library
const express= require("express");
//this is for creating the server
const MyServer=express();
// MyServer.use("/run",(req,res)=>{
//     res.send("hii my server is running now")
// })

// MyServer.use("/run",(req,res)=>{
//     res.send("hello")
// })

MyServer.get("/hii",(req,res)=>{
    res.send("bye bye")
})
//this is for run the server
MyServer.listen(8000,()=>{
    console.log("My server is running ha ha ha...")
})