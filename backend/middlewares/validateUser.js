
const validateUser = (req , res , next) => {
    const{name , email , password} = req.body ;

    if(!name || !email || !password || name.trim() === "" || email.trim() === "" || password.trim() ==="" ){
       return res.status(400).json({error: "Required fields are missing"});
    }
 next() ;
}

module.exports = validateUser;