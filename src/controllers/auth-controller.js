
const jwt = require("jsonwebtoken")
const User = require("../models/user-model")
require('dotenv').config()

var logger;
const newtoken = (user)=>{
    // console.log(process.env.SECRET_KEY)
    return jwt.sign({ user }, "masai");
}  

//Register
const register = async(req,res)=>{
    try{

        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).send({message:"Email already exits"})
        }
        user = await User.create(req.body)
         const token = newtoken(user);
        // const token = jwt.sign({ user }, 'mernstack');
        return res.status(200).send({user:user,token:token})

    }
    catch(err){
       res.status(500).send(err.message)
    }
}

//login

const login = async(req,res)=>{
    try{

        const  user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).send({message:"Wrong number or password"})
        }
        
        //check Password
        const match = user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send({message:"Wrong number or password"})
        }
        const token = newtoken(user)
        // const token = jwt.sign({ user }, 'mernstack');
        logger=user;
        loginUserInfo()
        return res.status(200).send({user:user,token:token})


    }
    catch(err){
        res.status(500).send(err.message)
    }
}

async function loginUserInfo(){
   logger =await logger
 return logger
}

module.exports= {register,login, newtoken,loginUserInfo}
