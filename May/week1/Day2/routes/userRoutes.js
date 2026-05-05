const express=require("express")
const router=express.Router();
router.get("/",(req,res)=>{
    res.send("hii get request called")
})
router.post("/create",(req,res)=>{
    res.send("hii post request called")
})
router.put("/update",(req,res)=>{
    res.send("hii put request called")
})
router.delete("/delt",(req,res)=>{
    res.send("hii delt request called")
})

module.export =router

