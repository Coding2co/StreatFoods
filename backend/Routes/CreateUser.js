const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { body, validationResult } = require("express-validator");

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "Ifyouloveitdoitifhopeishopelessintimesitwillbeyours";

router.post("/creatuser",[
    body("email", "invalid email").isEmail(),
    body("name", "Length must be 5 character long").isLength({ min: 5 }),
    body("password", "Length must be Five").isLength({ min: 5 })],
  async (req, res) => {
        
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("error reporting");
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try {

      await User.create({
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
 
      res.json({ Success: true });
    } catch {
      console.log(error);
      res.json({ Sucess: false });
    }
  }
)

  





router.post( "/loginuser",
  [
    body("email", "invalid email").isEmail(),
    body("password", "Length must be Five").isLength({ min: 5 })
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("error");
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
     
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try login with correct creditinals" });
      }
      const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
      if (! pwdCompare) {
        return res
          .status(400)
          .json({ errors: "Try login with correct creditinals" });
      }  

      const data = {
        user:{
          id:userData.id
        }
      }

      const authToken = jwt.sign(data,jwtSecret);
      return res.json({ Success: true,authToken:authToken});
    } catch {
      console.log(error);
      res.json({ Sucess: false });
    }
  }
);

module.exports = router;
