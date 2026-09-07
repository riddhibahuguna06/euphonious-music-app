const express = require("express");
const router = express.Router();

const validatePlaylist = require("../middlewares/validatePlaylist");
const validateUser = require("../middlewares/validateUser");
const validateSongs = require("../middlewares/validateSongs");

const {getPlaylist , getUserPlaylists , createPlaylist , addSongs} = require("../controllers/playlistController");

router.get("/:id" , getPlaylist);
router.get("/:userId/playlists" , getUserPlaylists) ;
router.post("/:userId/playlists" , validateUser ,validatePlaylist, createPlaylist);
router.post("/:playlistId/songs" , validateSongs , addSongs);


module.exports = router ;  