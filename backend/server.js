const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");

app.use(express.json()) ;

app.use((req , res , next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/api/registerUser" , userRouter);



app.listen(3000 , () => {
    console.log("Server is running");
})