const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        defaul: null
    },
    lastname:{
        type: String,
        default: null
    },
    email:{
        type:String,
        unique: true,
    },
    password:{
        type: String
    }
    ,
    token:{
        type:String,
    }
})

module.exports = mongoose.model('user',userSchema)