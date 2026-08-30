const express = require("express");
const app = express();
const pool = require("./db")

app.use(express.json()) ;

app.use((req , res , next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

async function testDatabaseConnection() {
  try {
    await pool.query("SELECT 1");
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
}

testDatabaseConnection();




app.listen(3000 , () => {
    console.log("Server is running");
})