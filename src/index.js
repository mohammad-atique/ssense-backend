const express = require("express");
const mensWearController = require("./controllers/mensWear.controllers.js")

const womensWearController = require("./controllers/womensWear.controllers.js");

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use("/womensWear", womensWearController); 

app.use("/mensWear", mensWearController);


const userController=require("./controllers/user-controller.js")
app.use("/users",userController)
const {register,login,newtoken}=require("./controllers/auth-controller.js")

app.post("/register",register)
app.post("/login",login)

module.exports = app;
