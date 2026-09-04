const pool = require("../db");
const bcrypt = require("bcrypt");
const AppError = require("../utils/AppError");

const registerUser = async(req , res , next) => {//post req

    const {name , email , password} = req.body;

    try{
    const hashedPassword = await bcrypt.hash(password, 10);
 
    const [result] = await pool.query(`INSERT INTO users(name , email , password) VALUES(? , ? , ? )` ,
        [name , email , hashedPassword]
    );
    return res.status(201).json({message: "Sucessfully registerd" , userId : result.insertId});
    }catch(err){
   next(err)
    }
}

const getUser = async(req , res , next) => {
const userId = Number(req.params.id) ;

try{
const [rows] = await pool.query(`SELECT id , name , email , created_at FROM users WHERE id = ?` , 
    [userId]
);

if(rows.length === 1){
return res.json(rows);
}else{
return next(new AppError(404 , "user not found"));
}

}catch(err){
next(err) ;
}
}

module.exports = {registerUser , getUser} ;