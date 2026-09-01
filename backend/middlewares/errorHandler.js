const errorHandler = (err ,req , res , next) => {

 console.log(err.stack);

let statusCode = err.statusCode || 500;
 let message = err.message || "Something went wrong";

 if (err.code === "ER_DUP_ENTRY") {
    statusCode = 409;
    message = "Email already exists";
  }

  res.status(statusCode).json({ error: message });
}
module.exports = errorHandler ;