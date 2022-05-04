const mongoose = require("mongoose");

// goodKart schema

const sliderSchema = new mongoose.Schema({
    img:{type:String, required:true}
}, {
    versionKey: false,
    timestamps: true,
});

const Slider = mongoose.model("slider", sliderSchema);

module.exports = Slider;