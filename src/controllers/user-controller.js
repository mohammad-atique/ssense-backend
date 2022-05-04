
const express= require("express");
const User = require("../models/user-model.js")
const router = express.Router();
router.get("/:email",async (req,res)=>{
    const user=await User.findOne({email: req.params.email}).lean().exec();

    return res.status(200).send(user);
})

module.exports=router