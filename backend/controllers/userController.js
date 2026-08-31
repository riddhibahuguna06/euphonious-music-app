const pool = require("../db");
const bcrypt = require("bcrypt");

const registerUser = async(req , res , next) => {//post req

    const {name , email , password} = req.body;

    try{
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const [result] = await pool.query(`INSERT INTO users(name , email , password) VALUES(? , ? , ? )` ,
        [name , email , hashedPassword]
    );
    return res.status(201).json({message: "Sucessfully registerd"},result.insertId);
    }catch(err){
   next(err)
    }
}

module.exports = {registerUser} ;