const mongoose = require("mongoose");

// goodKart schema

const imagearrSchema = new mongoose.Schema({

    arr: [{img:{
        type: String,
        required: true}
    }]


}, {
    versionKey: false,
    timestamps: true,
});

const Imagearr = mongoose.model("imagearr", imagearrSchema);

module.exports = Imagearr;