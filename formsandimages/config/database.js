const mongoose = require('mongoose');

// const {MONGODB_URL} = process.env;

exports.connect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/filedata",{
        useNewUrlParser: true,
          useUnifiedTopology: true
    })
    .then(
        console.log(`DB IS CONNECTED SUCCESSFULLY`)
    )
    .catch((error)=>{
        console.log( `DB CONNECTION FAILED`);
        console.log(error);
        process.exit(1);
    })
}