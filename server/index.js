const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db")
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("server has started on port 3000");
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Insert the new user into the database
    const newUser = await db.query(
      "INSERT INTO users (username, password) VALUES($1, $2) RETURNING *", 
      [username, hashedPassword]
    );
    // Return the newly created user
    res.json(newUser.rows[0]);
  } catch (err) {
    // Log the error message
    console.error(err.message);
    // Respond with a 500 status code and error message
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/users/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    
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
    const userResult = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    
    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const user = userResult.rows[0];

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" })
  }
})