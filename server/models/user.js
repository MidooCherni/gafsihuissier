const mongoose = require("mongoose")

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
    iorc:{      // individual or company
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

mongoose.model("User", UserSchema)