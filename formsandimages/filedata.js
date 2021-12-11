const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    fileName:{
        type:String,
        default:null
    },
    fileLink:{
        type:String,
        default:null

    }
})

module.exports = mongoose.model("filedata",dataSchema);