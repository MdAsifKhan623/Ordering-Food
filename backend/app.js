const express= require('express')
const cors=require('cors')
const app=express()
app.use(cors())

app.options("*",cors())

app.get("/",(req,res)=>{
    res.send("Hungry Bunny")
})

app.listen(5000, ()=>{console.log(`Server started at port 5000`)})