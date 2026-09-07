const validatePlaylist = (req , res , next) => {
    const {name} = req.body ;

    if(!name || name.trim() === ""){
        return res.status(400).json({error: "Required fields are missing"});
    }
    next();
}

module.exports = validatePlaylist ;