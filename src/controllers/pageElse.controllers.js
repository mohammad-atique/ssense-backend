const express = require("express");


const PageElse = require("../models/pageElse.models");

const router = express.Router();

router.post("",async (req,res)=>{
    try {
        const pageElse=await PageElse.create(req.body);
        
        return res.status(201).send(pageElse)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("",async (req,res)=>{
  try {
      const pageElses =await PageElse.find().lean().exec();
      
      return res.status(200).send({pageElse:pageElses})
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.get("/:id",async (req,res)=>{
  try {
      const pageElse=await PageElse.findById(req.params.id).lean().exec();
      
      return res.status(200).send(pageElse)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});

router.patch("/:id",async (req,res)=>{
  try {
      const pageElse=await PageElse.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
      }).lean().exec()
      
      return res.status(200).send(pageElse)
  } catch (error) {
      return res.status(500).send({message:error.message});
  }
});

router.delete("/:id",async (req,res)=>{
  try {
      const pageElse=await PageElse.findByIdAndDelete(req.params.id).lean().exec()
      
      return res.status(200).send(pageElse)
  } catch (error) {
      return res.status(500).send({message:error.message})
  }
});
module.exports = router;