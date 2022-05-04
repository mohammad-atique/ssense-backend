const express= require("express");

const Imagearr = require("../models/imagearr.model.js");


const router = express.Router();

router.get("", async (req,res) => {
  
    try{
        const imagearr = await Imagearr.find().lean().exec();

        return res.status(200).send(imagearr)
    }catch(err){
        return res.status(500).send({message: err.message});
    }
})

router.post("", async (req,res)=>{
    try {
        const imagearr = await Imagearr.create(req.body);
    
        return res.status(201).send(imagearr);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
})

router.get("/:id", async (req, res) => {
    try {
      const imagearr = await Imagearr.findById(req.params.id).lean().exec();
      // db.users.findOne({_id: Object('622893471b0065f917d24a38')})
  
      return res.status(200).send(imagearr);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.patch("/:id", async (req, res) => {
    try {
      const imagearr = await Imagearr.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(imagearr);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


module.exports = router;