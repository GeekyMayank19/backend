require('dotenv').config()
const express = require('express')

const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>Hello from auth system</h1>");
})

app.post("/register",(req,res)=>{
    const {firstname, lastname, email, password} = req.body;
})

module.exports = app