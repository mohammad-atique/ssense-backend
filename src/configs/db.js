// const mongoose= require("mongoose");

// const connect= ()=>{
//     return mongoose.connect("mongodb://127.0.0.1:27017/unit4project");
// }

// module.exports= connect;
const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  return mongoose.connect(
    process.env.mongo_url ,
    {useNewUrlParser: true}
  );
};

