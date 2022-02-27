const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const { MONGOURL } = require('./key.js')

const app=express()
const PORT=5000

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

const UserSchema = new mongoose.Schema({
        // required
    name:{      // of individual or company
        type:String,
        required:true
    },
    cinorid:{   // representant cin or company id
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }, 

        // optional
    email:{
        type:String,
        required:false
    },
    tel:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
})

const User = mongoose.model("User", UserSchema)

function containsLetter(str){
    for (let i in str) {
        if(i === '+'){ continue }
        if(isNaN(i)){
            return true
        }
    }
    return false
}

app.use(cors())
app.use(express.json())

app.use('/signin', (req, res) => {
    User.find({ $or: [{ cinorid:req.body.mailcin, pass:req.body.pass }, 
                      { email:req.body.mailcin, pass:req.body.pass }]}, function(err, result){
        if(result.length >= 1){ 
            res.send({status: "LOGGEDIN", userid:result[0].cinorid})
        } else {
            res.send({status: "NOTFOUND"})
        }
    })
});

app.use('/signup', (req, res) => {
    console.log('received registration request from ', req.body.name)
        // field check
    if((req.body.name == undefined) || (req.body.mail == undefined) || (req.body.cin == undefined) || (req.body.tel == undefined) || 
       (req.body.pass == undefined) || (req.body.pass2 == undefined) || (req.body.addr == undefined)){
        res.send({status: "EMPTY"})
        return}
        // mail check
    if((req.body.mail.indexOf('@') == -1) || (req.body.mail.indexOf('.') == -1)){
        res.send({status: "MAILERR"})
        return }
        // pass check
    if(req.body.pass != req.body.pass2){
        res.send({status: "PASSERR"})
        return }
        // cin and tel check
    if(containsLetter(req.body.tel)){
        res.send({status: "TELERR"})
        return }
    if(containsLetter(req.body.cin)){
        res.send({status: "CINERR"})
        return }
        // all good -- check pre existence
    /*m.User.find({ cinorid:req.body.cin }, function(err, result){
        if(err){ 
            res.send({status: "ERRFIND"})
            return }
        if(result.length > 0){ 
            res.send({status: "EXISTS"})
            return } else {
            m.User.create({ name:req.body.name, cinorid:req.body.cin, pass:req.body.pass,
                email:req.body.mail, tel:req.body.tel, addr:req.body.addr })
        }
    })*/
    User.find({ cinorid:req.body.cin }, function(err, result){
        if(result.length >= 1){ 
            res.send({status: "EXISTS"})
        } else {
            var newUser = new User({ name:req.body.name, cinorid:req.body.cin, pass:req.body.pass,
                email:req.body.mail, tel:req.body.tel, address:req.body.addr })
            newUser.save(function(err, result){if(err){console.log(err)}})
            res.send({status: "MRIGEL"})
        }
    })
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})