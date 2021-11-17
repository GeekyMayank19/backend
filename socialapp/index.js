const express = require("express")
const app = express();
const PORT = 4000 || process.env.PORT;
app.get("/",(req,res)=>{
res.send("that's i already know")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})