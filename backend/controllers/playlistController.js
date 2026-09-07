const pool = require("../db");
const AppError = require("../utils/AppError");

const getPlaylist = async (req , res , next) => {

    const playlistId = Number(req.params.id) ;

    try{
         const [rows] = await pool.query(`SELECT id , name , created_at FROM playlists WHERE id = ?` ,[playlistId] ) ;

         if(rows.length === 0 ){
            return next(new AppError(404 , "playlist not found"));
}
return res.json(rows[0]);
    }catch(err){
        next(err);
    }
}

const getUserPlaylists = async (req , res , next) => {
    const userId = Number(req.params.userId) ;

    try{
         const [userRows] = await pool.query(`SELECT id  FROM users WHERE id = ?` , [userId]);

         if(userRows.length === 0){
            return next(new AppError(404 , "No user found"))
         }

         const [playlistRows] = await pool.query(`SELECT id , name ,user_id FROM playlists WHERE user_id = ?` , [userId]);

         return res.json(playlistRows);

    }catch(err){
        next(err);
    }
}

const createPlaylist = async(req , res , next) => {

    const userId = Number(req.params.userId);
    const {name} = req.body;
    try{
        const [result] = await pool.query(`INSERT INTO playlists (name , user_id) VALUES(? , ?)` , [name , userId]) ;
    
        return res.status(201).json({message:"Playlist is sucessfully created"});
        
    }catch(err){
        next(err);
    }
}

const addSongs = async(req , res , next) => {

    const playlistId = Number(req.params.playlistId);
    const { external_id, song_name, artist_name} = req.body ;

    try{

        const [playlistRows] = await pool.query(`SELECT id from playlists WHERE id = ? ` , [playlistId]);

    if(playlistRows.length === 0){
        return next(new AppError(404 , "No playlist found"));
    }

    const [songRows] = await pool.query(`SELECT id FROM songs WHERE external_id = ? ` ,[external_id]);

    let songId ;
     if(songRows.length > 0){
         songId = songRows[0].id ;
    }else{
        const [result] = await pool.query(`INSERT INTO songs (external_id, song_name, artist_name) VALUES (? , ? , ?)` , [external_id, song_name, artist_name]);

        songId = result.insertId;
    }

    const [linkResult] = await pool.query(`INSERT INTO playlists_songs (playlist_id , song_id) VALUES (? , ?)`, [playlistId , songId]);

    return res.status(201).json({message:"Songs is sucessfully added to the playlist"});

    }catch(err){
        next(err);
    }
    
}

module.exports = {getPlaylist , getUserPlaylists , createPlaylist , addSongs};