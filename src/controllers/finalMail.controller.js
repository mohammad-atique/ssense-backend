
const express = require("express");

const transporter = require("../configs/mail");
const {register,login, newtoken,loginUserInfo} = require("./auth-controller");


const router = express.Router();
router.post("/", async function (req, res) {
 

  try { 
    let user=await loginUserInfo();
    
    transporter.sendMail({
      from: '"lybrate admin" <admin@lybrate.com>', // sender address
      to: user.email, // list of receivers
      subject: "Your librate order item", // Subject line
      text: `Hello ${user.name},
      Thank you for shopping with us. We'd like to let you know that we received your order, and is preparing for shipment. Your estimated delivery will be in a week.
      `, // plain text body
      html: `<b>Hello ${user.name},
        <br>
        <h2>Thank you for shopping with us.<h2>
        <br>
         We'd like to let you know that we received your order, and is preparing for shipment. Your estimated delivery will be in a week.
        `, // html body
    });

    return res.status(201).send({ message:"order placed successfully"});
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
