const mongoose = require("mongoose");

// mensWear schema

const pageElseSchema = new mongoose.Schema({
    id:{type: Number, required:true},
    img_url: { type: String, required: true },
    product: { type: String, required: true },
    pro_desc: { type: String, required: true },
    price: { type: Number, required: true},
}, {
    versionKey: false,
    timestamps: true,
});

const PageElse = mongoose.model("pageElse", pageElseSchema);

module.exports = PageElse;