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

  // USING PROMISE
  // const { username, password } = req.body;
  // pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *", [username, password])
  //   .then(newUser => {
  //     res.json(newUser.rows[0]);
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   });

  try {
    const { username, password } = req.body;
    const newUser = await pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *", 
    [username, password]);
    res.json(newUser.rows[0]);

  } catch (err){
    console.log(err.message);
  }
})

app.get("/users/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    
    if (user.rows.length == 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.rows[0])
  } catch (err){
    console.error(err.message);
  }
})

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);
    
    if (user.rows.length == 0) {
      return res.status(404).json({ message: "Invalid username or password"});
    }

    res.json({ message: "Successful login" })
  } catch (err) {
    console.error(err.message);
  }
})