const express = require("express");
const app = express();
const morgan = require("morgan")  // morgan is used to show the routes in console
 
//morgan middleware
app.use(morgan('tiny'))

// import routes form routes
const home = require("./routes/home");

//router middleware
app.use("/", home);

// export app js
module.exports = app;
