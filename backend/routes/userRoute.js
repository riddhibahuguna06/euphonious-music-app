const express = require("express");
const router = express.Router();
const validateUser = require("../middlewares/validateUser");

const {registerUser , getUser} = require("../controllers/userController");


router.post("/" , validateUser , registerUser);

router.get("/:id" , getUser);

module.exports = router ;