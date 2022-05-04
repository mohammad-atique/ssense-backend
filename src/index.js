const express = require("express");
const goodKartsController = require("./controllers/goodKart.controllers.js")
const sliderController = require("./controllers/slider.controller.js");
const imagearrController = require("./controllers/imagearr.controller.js")
const womensWearController = require("./controllers/womensWear.controllers.js");

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use("/womensWear", womensWearController); 

app.use("/goodKarts", goodKartsController);
app.use("/sliders", sliderController);
app.use("/imagearrs", imagearrController);

//--minakshi
const productController = require("./controllers/product.controllers.js");
app.use("/vitaminandsupplementproducts", productController); 
const sexualwellnessproductController = require("./controllers/sexualwellnessproduct.controllers.js");
app.use("/sexualwellnessproducts", sexualwellnessproductController); 
const foodanddrinkproductController = require("./controllers/foodanddrinkproduct.controllers");
app.use("/foodanddrinkproducts", foodanddrinkproductController); 
const childcareproductController = require("./controllers/childcareproduct.controllers");
app.use("/childcareproducts", childcareproductController); 

//Soumya

const userController=require("./controllers/user-controller.js")
app.use("/users",userController)
const {register,login,newtoken}=require("./controllers/auth-controller.js")

const passport = require("./configs/google-oauth.js")

app.post("/register",register)
app.post("/login",login)

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
         
        failureRedirect: '/auth/google/failure', session:false
}),
    function (req, res){
        const token = newtoken(req.user)
        return res.status(200).send({user:req.user, token})
    }

);

// ------------pankaj

const mailController = require("./controllers/mail.controllers");
const finalMailController = require("./controllers/finalMail.controller")
app.use("/checkoutOtpMail", mailController);
app.use("/finalMail",finalMailController);
module.exports = app;
