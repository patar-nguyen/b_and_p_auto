const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("server has started on port 3000");
});

app.post("/users", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *", 
    [username, password]);
    res.json(newUser);

  } catch (err){
    console.log(err.message);
  }
})