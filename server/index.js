const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const { MONGOURL } = require('./key.js')

const app=express()
const PORT=5000
app.use(cors())
app.use(express.json())

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
    email:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
})
const User = mongoose.model("User", UserSchema)

const CaseSchema = new mongoose.Schema({
    id_of_user:{          // -1 if anonymous
        type:String,
        required:true
    },
    date_started:{
        type:String,
        required:true
    },
    date_sched:{
        type:String,
        required:false
    },
    chatlogWho:{
        type:Array,
        required:true
    },
    chatlogWht:{
        type:Array,
        required:true
    },
    chatlogWhn:{
        type:Array,
        required:true
    },
    filelog:{
        type:Array,
        required:true
    },
    solved:{                // REPLACED: "SOLVED" IS NOW USED FOR "UNREAD"
        type:Boolean,
        required:true
    },
})
const Case = mongoose.model("Case", CaseSchema)

function containsLetter(str){
    for (let i in str) {
        if(i === '+'){ continue }
        if(isNaN(i)){
            return true
        }
    }
    return false
}

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
    User.find({ cinorid:req.body.cin }, function(err, result){
        if(err){ console.log(err); return }
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

app.use('/getinfo', (req, res)=>{
    User.find({ cinorid: req.body.userid }, function(err, result){
        if(err){ res.send({ cinorid:"ERR" }); return }
        res.send({ cinorid:result[0].cinorid, name:result[0].name, email:result[0].email, tel:result[0].tel, addr:result[0].addr })
    })
})

app.use('/getcase', (req, res)=>{
    Case.find({ id_of_user:req.body.userid }, function(err, result){
        if(err){ res.send({ found:"ERR" }); return }
        if(result.length == 0){
            res.send({ found:"NO" })
        } else {
            res.send({ found:"YES", id_of_user:result[0].id_of_user, date_started:result[0].date_started, chatlogWho:result[0].chatlogWho, 
            chatlogWht:result[0].chatlogWht, chatlogWhn:result[0].chatlogWhn, filelog:result[0].filelog, solved:result[0].solved,
            date_sched:result[0].date_sched })
        }
    })
})

app.use('/makecase', (req, res)=>{  
    User.find({ cinorid:req.body.t }, function(err, result){
        if(err){ res.send({status:"ERRBAD"}); return }
        if(result.length == 0){ 
            res.send({status: "ERROR"})
        } else {
            var newCase = new Case({ id_of_user:req.body.t, date_started:new Date().toString(), date_sched:"", chatlogWho:["0"],
                chatlogWht:[req.body.cnt], chatlogWhn:[new Date().toString()], filelog:[""], solved:false })
            newCase.save(function(err, result){if(err){console.log(err)}})
            res.send({status: "MRIGEL"})
        }
    })
})

app.use('/sendclientmsg', (req, res)=>{
    const oldChatWho = []
    const oldChatWht = []
    const oldChatWhn = []
    Case.find({ id_of_user:req.body.t }, function(err, result){
        if(err){ res.send({status:"ERRSENDMSGA"}); return }
        if(result.length > 0){
            for(i = 0; i < result[0].chatlogWht.length; i++){
                oldChatWho.push(result[0].chatlogWho[i])
                oldChatWht.push(result[0].chatlogWht[i])
                oldChatWhn.push(result[0].chatlogWhn[i])
            }
        }
        oldChatWhn.push(new Date().toString())
        oldChatWho.push("0")
        oldChatWht.push(req.body.cntm)
        Case.findOneAndUpdate({ id_of_user:req.body.t }, {
            chatlogWho:oldChatWho,
            chatlogWht:oldChatWht,
            chatlogWhn:oldChatWhn,
            solved:true
        }, function(err, result){ if(err) {console.log(err)} })
    })
})

app.use('/sendadminmsg', (req, res)=>{
    const oldChatWho = []
    const oldChatWht = []
    const oldChatWhn = []
    Case.find({ id_of_user:req.body.t }, function(err, result){
        if(err){ res.send({status:"ERRSENDMSGA"}); return }
        if(result.length > 0){
            for(i = 0; i < result[0].chatlogWht.length; i++){
                oldChatWho.push(result[0].chatlogWho[i])
                oldChatWht.push(result[0].chatlogWht[i])
                oldChatWhn.push(result[0].chatlogWhn[i])
            }
        }
        oldChatWhn.push(new Date().toString())
        oldChatWho.push("1")
        oldChatWht.push(req.body.cntm)
        Case.findOneAndUpdate({ id_of_user:req.body.t }, {
            chatlogWho:oldChatWho,
            chatlogWht:oldChatWht,
            chatlogWhn:oldChatWhn,
            solved:false
        }, function(err, result){ if(err) {console.log(err)} })
    })
})

app.use('/getdmheaders', (req, res)=>{
    Case.find({ }, function(err, result){
        if(err){ res.send({ found:"ERR" }); return }
        if(result.length == 0){
            res.send({ found:"NO" })
        } else {
            const idtable = []
            for(let i = 0; i < result.length; i++){
                if(result[i].solved){
                    idtable.push(result[i].id_of_user + " - NOUVEAU")
                } else {
                    idtable.push(result[i].id_of_user)
                }
            }
            res.send({ found:"YES", restable:idtable })
        }
    })
})

app.listen(PORT,()=>{
    console.log("Server is running on",PORT)
})