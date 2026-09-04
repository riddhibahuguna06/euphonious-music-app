const pool = require("../db");
const AppError = require("../utils/AppError");

const getPlaylist = async (req , res , next) => {

    const playlistId = Number(req.params.id) ;

    try{
         const [rows] = await pool.query(`SELECT id , name , created_at FROM playlists WHERE id = ?` ,[playlistId] ) ;

         if(rows.length === 1){
return res.json(rows);
}else{
return next(new AppError(404 , "playlist not found"));
}
    }catch(err){
        next(err);
    }
}

module.exports = {getPlaylist};