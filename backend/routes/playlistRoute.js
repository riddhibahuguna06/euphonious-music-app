const express = require("express");
const router = express.Router();

const {getPlaylist} = require("../controllers/playlistController");

router.get("/:id" , getPlaylist);


module.exports = router ; 