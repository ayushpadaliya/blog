const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const mongoose = require("mongoose");
const EmployeeModel = require("./model/database");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// dotenv.config();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE ,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send('backend')
});

const url = `mongodb://127.0.0.1:27017/blog?retryWrites=true&w=majority`;

console.log(url);
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((error) => {
    console.log("error regarding to database: ", error);
  });




// Registration endpoint
app.post("/sign", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await EmployeeModel.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exists, please login.");
    }

    // Determine the user's role based on specific criteria
    let role = "user"; // Default role is "user"
  const newUser = await EmployeeModel.create({
      name,
      email,
      password,
      role, // Assign the determined role
    });

    await newUser.save();

    res.status(201).json({ user: newUser, message: "Registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.listen(5001);