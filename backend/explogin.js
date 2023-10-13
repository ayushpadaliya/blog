const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserModel = require("./model/database"); // Replace with your User model
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))
const url = `mongodb://127.0.0.1:27017/blog?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(url)
  .then(() => {
    console.log("connected to database successfully");

  })
  .catch((error) => {
    console.log("error regarding to database: ", error);
  });
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    console.log(email)
    console.log(password)


    if (!user) {
      return res.status(401).json({ message: "error1" });
    }
    if (password == user.password) {
      isPasswordValid = true;
    }
    console.log('Stored Hashed Password:', user.password);
    console.log('Provided Password:', password);
    console.log('Password Comparison Result:', isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "pass not matched" });
    }



    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
