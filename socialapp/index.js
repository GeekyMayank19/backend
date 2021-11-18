
const express = require("express")
var format = require('date-format');
format.asString();

const app = express();
const PORT = 4000 || process.env.PORT;



app.get("/",(req,res)=>{
res.send("that's i already know")
})

app.get("/api/v1/:tokenfuckyou",(req,res)=>{
    res.status(200).json({param: req.params})
})

app.get("/v1/instagram",(req,res)=>{
    const instaSocial = {
        userName: "kakarot",
        follower: 56,
        follow: 60,
        date : format.asString('"DAY"- dd/MM/yy "Time"- hh:mm:ss', new Date())
    }
res.status(200).json(instaSocial)
})

app.get("/v1/facebook",(req,res)=>{
    const instaSocial = {
        userName: "kakarot",
        follower: 56,
        follow: 60,
        date : Date.now()
    }
res.status(200).json(instaSocial)
})


app.get("/v1/linkedin",(req,res)=>{
        const instaSocial = {
            userName: "kakarot",
            follower: 56,
            follow: 60,
            date : Date.now()
        }
res.status(200).json(instaSocial)
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})