const mongoose = require('mongoose')
const express= require('express')
const cors=require('cors')
const { Connection } = require('mongoose')
const app=express()
const dbConnection= require('./database')

app.use(cors())

dbConnection();

app.options("*",cors())


app.get("/",(req,res)=>{
    res.send("Hungry Bunny")
})

app.get("/login",(req,res)=>{
    
})

app.post("/signup",(req,res)=>{
    
})

app.listen(5000, ()=>{console.log(`Server started at port 5000`)})