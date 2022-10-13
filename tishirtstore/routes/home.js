const express = require('express');
const router = express.Router()

//responsible for all the routes that comes on /home


///import controllers
const {home} = require('../controllers/homeController')

// do what do you want
router.route("/").get(home);

//export router
module.exports = router