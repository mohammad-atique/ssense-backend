const express= require("express");

const Slider = require("../models/slider.model.js");


const router = express.Router();

router.get("", async (req,res) => {
  
    try{
        const slider = await Slider.find().lean().exec();

        return res.status(200).send(slider)
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

router.post("", async (req,res)=>{
    try {
        const slider = await Slider.create(req.body);
    
        return res.status(201).send(slider);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

router.get("/:id", async (req, res) => {
    try {
      const slider = await Slider.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(slider);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const slider = await Slider.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(slider);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


module.exports = router;