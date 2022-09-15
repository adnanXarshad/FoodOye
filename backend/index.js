const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const conn = async () => {
  await mongoose.connect(
    "mongodb+srv://FoodOye:admin123@cluster0.ykls6lw.mongodb.net/FoodOye?retryWrites=true&w=majority",
    () => console.log("Database Connected")
  );
};
//schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//modal
const User = new mongoose.model("User", userSchema);

//routes
app.post("/login", (req, res) => {
  //   res.send("My Login");
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "User Login Succesfully", user: user });
      } else {
        res.send({ message: "Password Not Matched" });
      }
    } else {
      res.send({ message: "User Not Found" });
    }
  });
});

app.post("/signup", (req, res) => {
  //   res.send("My Signup");
  console.log(req.body);
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Exists" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Succesfully Registered, Proceed to Login" });
        }
      });
    }
  });
});

app.listen(3005, () => {
  console.log("DB Connected on Port 3005");
});
