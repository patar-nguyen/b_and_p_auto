const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cors({
  origin: ["http://localhost:5173"], // Allow your frontend origin
  methods: ["GET", "POST"],
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  key: "userId",
  secret: "patar",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
}));

app.listen(3000, () => {
  console.log("server has started on port 3000");
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await db.query(
      "INSERT INTO users (username, password) VALUES($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

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

    req.session.user = { id: user.user_id, username: user.username };
    console.log("User session:", req.session.user);
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Internal server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/login", async (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

app.post("/maintenance", async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const { make, model, year, vin, plate, mileage, service, description } = req.body;
    const user_id = req.session.user.id;

    const newMaintenance = await db.query(
      "INSERT INTO maintenance (user_id, car_make, car_model, year, vin, plate, mileage, service, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [user_id, make, model, year, vin, plate, mileage, service, description]
    );
    res.status(200).json(newMaintenance.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "internal server error" });
  }
});

app.post("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session", err);
        res.status(500).json({ error: "Failed to logout" });
      } else {
        res.clearCookie("sid");
        res.status(200).json({ message: "Logout successful" });
      }
    });
  } catch (err) {
    console.error("Error during logout", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const user = await db.query("SELECT * FROM users WHERE username = $1", [username]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/maintenance/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const maintenanceRecords = await db.query("SELECT * FROM maintenance WHERE user_id = $1", [userId])

    if (maintenanceRecords.rows.length === 0) {
      return res.status(404).json({ message: "Maintenance record not found" });
    }

    res.status(200).json(maintenanceRecords.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
})
