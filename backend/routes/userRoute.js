const express = require("express");
const router = express.Router();
const validateTask = require("../middlewares/validateUser");

const {registerUser} = require("../controllers/userController");

router.post("/" , validateTask , registerUser);

module.exports = router ;