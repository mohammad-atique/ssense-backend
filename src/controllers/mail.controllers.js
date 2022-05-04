
const express = require("express");

const transporter = require("../configs/mail");
const {register,login, newtoken,loginUserInfo} = require("./auth-controller");


const router = express.Router();
router.post("/", async function (req, res) {
  const otp = Math.floor(Math.random() * (999999 - 100000) + 100000);
// console.log(otp)
  try { 
    let user=await loginUserInfo();
    
    transporter.sendMail({
      from: '"lybrate admin" <admin@lybrate.com>', // sender address
      to: user.email, // list of receivers
      subject: "verify OTP - checkout process", // Subject line
      text: `Hello ${user.name},
      Please verify your OTP. Your OTP is below:
      ${otp}`, // plain text body
      html: `<b>Hello ${user.name},
        <br>
        Please verify your OTP. Your OTP is below:
        <br>
        ${otp}</b>`, // html body
    });

    return res.status(201).send({ otp:otp});
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
