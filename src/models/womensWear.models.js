const mongoose = require("mongoose");

const womensSchema = new mongoose.Schema(
  {
    img_url: { type: String, required: true },
    product: { type: String, required: true },
    pro_desc: { type: String, required: true },
    price: { type: Number, required: true},
    
  }, {
    versionKey: false,
    timestamps: true,
}
);

module.exports = mongoose.model("womensWear", womensSchema);