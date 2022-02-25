const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")

router.get("/signup", (req, res)=>{
    console.log(req)
    res.send("DONE")
})

module.exports = router