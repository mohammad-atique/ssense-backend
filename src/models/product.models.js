const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    des: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true},
    strprice:{ type: Number, required: true},
    
  }, {
    versionKey: false,
    timestamps: true,
}
);

module.exports = mongoose.model("product", productSchema);