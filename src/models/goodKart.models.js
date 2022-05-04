const mongoose = require("mongoose");

// goodKart schema

const goodKartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    arr: [{
        img: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        stprice: {
            type: String,
            required: true
        }
    }]
}, {
    versionKey: false,
    timestamps: true,
});

const GoodKart = mongoose.model("goodKart", goodKartSchema);

module.exports = GoodKart;