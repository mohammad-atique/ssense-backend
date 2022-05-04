const express= require("express");

const GoodKart = require("../models/goodKart.models.js");


const router = express.Router();

router.get("", async (req,res) => {
  
    try{
        const goodKarts = await GoodKart.find().lean().exec();

        return res.status(200).send({goodKarts: goodKarts})
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

router.post("", async (req,res)=>{
    try {
        const goodKart = await GoodKart.create(req.body);
    
        return res.status(201).send(goodKart);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

router.get("/:id", async (req, res) => {
    try {
      const goodKart = await GoodKart.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(goodKart);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const goodKart = await GoodKart.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(goodKart);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  router.delete("/:id",async (req,res)=>{
    try {
        const goodKart=await GoodKart.findByIdAndDelete(req.params.id).lean().exec()
        
        return res.status(200).send(goodKart);
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
  });


module.exports = router;