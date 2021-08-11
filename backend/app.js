const dbConnection =require('./database')

dbConnection()

const express= require('express')
const cors=require('cors')
const app=express()
app.use(cors())

app.options("*",cors())

app.get("/",(req,res)=>{
    res.send("Hungry Bunny")
})

app.get("/login",(req,res)=>{
    
})

app.post("/signup",(req,res)=>{
    
})

app.listen(5000, ()=>{console.log(`Server started at port 5000`)})