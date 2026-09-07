const validateSongs = (req , res , next) => {
 const { external_id, song_name, artist_name } = req.body;

  if (!external_id || external_id.trim() === "") {
    return  res.status(400).json({error: "Required field is missing"});
  }

  if (!song_name || song_name.trim() === "") {
    return  res.status(400).json({error: "Required field is missing"});
  }

  if (!artist_name || artist_name.trim() === "") {
    return  res.status(400).json({error: "Required field is missing"});
  }
  next();


}

module.exports = validateSongs;