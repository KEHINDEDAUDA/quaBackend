var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const { response } = require('express');


const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const QuabblyUser = mongoose.model("QuabblyUser", userSchema);

router.post("/", function (req, res) {

  QuabblyUser.create(
    {
      userName: req.body.email,
      password: req.body.password,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: "server error" });
      } else {
        return res.status(200).json({ message: "login successful" });
      }
    }
  );
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json("LOGIN ROUTE");
});


module.exports = router;
