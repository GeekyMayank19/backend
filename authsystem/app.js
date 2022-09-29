require("dotenv").config();
require("./config/database").connect(); // calling data base config
const bcryptjs = require("bcryptjs"); // it used to convert simple string password to encrypted format
const express = require("express");
const User = require("./model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");


const app = express();

///middleware
app.use(express.json());
app.use(cookieParser());

//routers
app.get("/", (req, res) => {
  res.send("<h1>Hello from auth system</h1>");
});

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    //// mongoose validation
    if (!(firstname && lastname && email && password)) {
      res.status(400).send("all the parameter are required");
    }

    // always think quary will take time so we use async function propmis and await
    const existingUser = await User.findOne({ email }); //promise

    if (existingUser) {
      res.status(400).send("user allready exist ");
    }

    // we can write here or in schema model
    // using middleware provided by mongoose

    // this will return encrypted password
    const encryptedPass = await bcryptjs.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPass,
    });

    ///generating token
    const token = jwt.sign(
      { user_id: user._id, email }, //user._id is return by User.create query
      //it continan some data like user._id etc
      process.env.SECRET_KEY,
      { expiresIn: "2h" } // time to expaire the token
    );

    //not save in database but it don't go in req.send

    user.password = undefined;

    user.token = token;
    // upadate in db on not it your choice

    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("Field is missing");
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).send("please enter valid user email");
    }

    const isCorrectPaas = await bcryptjs.compare(password, user.password);

    if (!isCorrectPaas) {
      res.status(400).send("Invalid Password");
    }

    if (user && isCorrectPaas) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        { expiresIn: "2h" }
      );

      user.token = token;
      user.password = undefined;
      //if you don't want to use user
      //   res.status(200).send(user);
      //if you want to use cookies so.
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        // if it is true then cookies can be access by only backend
        //it can't be used by frontend 
        httpOnly: true,
      };

      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });

    }

  } catch (error) {
    console.log(error);
  }
});

app.get("/dashboard", auth, (req, res) => {
  res.send("welcme to the secret dashboard");
});

module.exports = app;
