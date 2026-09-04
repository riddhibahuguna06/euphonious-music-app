const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorHandler");
const playlistRouter = require("./routes/playlistRoute");

app.use(express.json()) ;

app.use((req , res , next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/api/users" , userRouter);

app.use("/api/users" , userRouter);

app.use("/api/playlists" , playlistRouter) ;

app.use(errorHandler)


app.listen(3000 , () => {
    console.log("Server is running");
})