const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")

router.get("/signin", (req, res)=>{
    res.send({
        token: 'a'
    });
})

module.exports = router