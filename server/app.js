const express = require('express')
const mongoose = require('mongoose')
const { MONGOURL } = require('./key.js')

const app=express()
const PORT=5000

require("./models/user.js")

app.use(express.json())
app.use(require('./routes/auth.js'))

mongoose.connect(MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDB cluster")
})

mongoose.connection.on("error",()=>{
    console.log("ERROR: Could not connect to MongoDB cluster")
})

app.get('/',(req,res)=>{
    res.send("hello world")
    console.log("hi nigga!")
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})