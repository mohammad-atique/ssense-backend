const mongoose = require("mongoose");

// mensWear schema

const mensWearSchema = new mongoose.Schema({
    id:{type: Number, required:true},
    img_url: { type: String, required: true },
    product: { type: String, required: true },
    pro_desc: { type: String, required: true },
    price: { type: Number, required: true},
}, {
    versionKey: false,
    timestamps: true,
});

const MensWear = mongoose.model("mensWear", mensWearSchema);

module.exports = MensWear;