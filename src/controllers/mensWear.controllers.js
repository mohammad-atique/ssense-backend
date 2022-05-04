const express= require("express");

const MensWear = require("../models/mensWear.models.js");


const router = express.Router();

router.get("", async (req,res) => {
  
    try{
        const mensWears = await MensWear.find().lean().exec();

        return res.status(200).send({mensWears: mensWears})
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

router.post("", async (req,res)=>{
    try {
        const mensWear = await MensWear.create(req.body);
    
        return res.status(201).send(mensWear);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

router.get("/:id", async (req, res) => {
    try {
      const mensWear = await MensWear.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(mensWear);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const mensWear = await MensWear.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(mensWear);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  router.delete("/:id",async (req,res)=>{
    try {
        const mensWear=await MensWear.findByIdAndDelete(req.params.id).lean().exec()
        
        return res.status(200).send(mensWear);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
  });


module.exports = router;