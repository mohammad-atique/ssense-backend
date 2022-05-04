const express = require("express");


const WomensWear = require("../models/womensWear.models");

const router = express.Router();

router.post("",async (req,res)=>{
    try {
        const womensWear=await WomensWear.create(req.body);
        
        return res.status(201).send(womensWear)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("",async (req,res)=>{
  try {
      const womensWears=await WomensWear.find().lean().exec();
      
      return res.status(200).send({womensWear:womensWears})
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.get("/:id",async (req,res)=>{
  try {
      const womensWear=await WomensWear.findById(req.params.id).lean().exec();
      
      return res.status(200).send(womensWear)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.patch("/:id",async (req,res)=>{
  try {
      const womensWear=await WomensWear.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      }).lean().exec()
      
      return res.status(200).send(womensWear)
  } catch (error) {
      return res.status(500).send({message:error.message});
  }
});

router.delete("/:id",async (req,res)=>{
  try {
      const womensWear=await WomensWear.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.status(200).send(womensWear)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});
module.exports = router;