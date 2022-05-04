
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const passport = require("passport")

const { v4: uuidv4 } = require("uuid");
const User = require('../models/user-model');

require("dotenv").config()

passport.use(new GoogleStrategy({
    clientID:     "823053738086-qkmo4h5bliti66ndf93gf3j257e2298n.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, cb) {
    // console.log(profile._json.email)
    // console.log(uuidv4())

    let user = await User.findOne ({ email: profile?._json?.email }).lean().exec()

    if(!user){

      user = await User.create({
        email : profile._json.email,
        password : uuidv4()

      })
    }
    console.log(user)
    return cb(null, user);
  }
));

module.exports = passport;