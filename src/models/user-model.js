const mongoose= require('mongoose')
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name:{type:String, required:false},
    mobile:{type:Number, require:true},
    email:{type:String,required:false,unique:true},
    password:{type:String,required:true}
},{
   versionKey:false,
    timestamps:true
})

userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 10);
    this.password = hash
    return next()
})

userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user",userSchema)
module.exports=User