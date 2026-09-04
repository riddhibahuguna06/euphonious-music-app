const AppError = require("../utils/AppError");

const errorHandler = (err ,req , res , next) => {

 console.log(err.stack);

  // console.error("---- ERROR DETAILS ----");
  // console.error("message:", err.message);
  // console.error("code:", err.code);
  // console.error("errno:", err.errno);
  // console.error("sqlState:", err.sqlState);
  // console.error("sqlMessage:", err.sqlMessage);
  // console.error("------------------------");

let statusCode = err.statusCode || 500;
 let message = err.message || "Something went wrong";

 if (err.code === "ER_DUP_ENTRY") {
    statusCode = 409;
    message = "Email already exists";
  }

  res.status(statusCode).json({ error: message });
}
module.exports = errorHandler ;