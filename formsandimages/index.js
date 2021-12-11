const express = require('express');
const fileUpload = require('express-fileupload');
require("./config/database").connect();
//step 1 to upload file on cloudinary
const cloudinary = require('cloudinary').v2;

//testing purpose
const fileData = require('./filedata');


//setting up cloudinary apis
cloudinary.config({
    cloud_name:"dsvgfuyhm",
    api_key:"544679418153858",
    api_secret:"btUzTQr8oUn9KukKc4GEYml8bZ8"
})

const app = express();
// used for ejs templete
app.set("view engine", "ejs")

// middleware
app.use(express.json())// use to read json which is given 
//from front end
//this is used to read url with complex structure
app.use(express.urlencoded({extended:true}))

//this is for uploading files
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.get("/myget",(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.post("/mypost",async(req,res)=>{
    // console.log(req.body)
    // console.log(req.files);

    let imageArray = [];
    const file = req.files.semplefile;

    for(let i = 0 ;i<req.files.semplefile.length;i++){
        let result = await cloudinary.uploader.upload(file[i].tempFilePath,{
            folder:"probackend"
        })
        imageArray.push({
            public_id: result.public_id,
            secure_url: result.secure_url
        });
    }


    // uploading single file
    // result =await cloudinary.uploader.upload(file.tempFilePath,{
    //     folder:"probackend"
    // })

    const detail = {
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        imageArray
    }
    // console.log(detail)

    console.log(imageArray[0])

    const filedata = await fileData.create({
        fileName:req.body.firstname,
        fileLink:imageArray[0].secure_url,
    })



    // filedata.save()
    

    res.send(detail )
})

app.get("/mygetform",(req,res)=>{
    res.render("getform");
})
app.get("/mypostform",(req,res)=>{
    res.render("postform");
})

app.listen(4000,()=>{
    console.log("sever is running at port 4000");
})