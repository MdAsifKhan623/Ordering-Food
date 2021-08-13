const mongoose = require('mongoose')
const express= require('express')
const cors=require('cors')
const { Connection } = require('mongoose')
const app=express()
app.use(cors())

const databaseName="food-order"

mongoose.connect(`mongodb://127.0.0.1:21017/${databaseName}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true});

const connection =mongoose.connection;

connection.once("open",()=>{
    console.log("Connection to Mongo Db Was successful!")
})

app.options("*",cors())


app.get("/",(req,res)=>{
    res.send("Hungry Bunny")
})

app.get("/login",(req,res)=>{
    
})

app.post("/signup",(req,res)=>{
    
})

app.listen(5000, ()=>{console.log(`Server started at port 5000`)})