

const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
const passport=require('passport')
const { v4: uuidv4 } = require('uuid');
const User = require('../model/model.user');

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, cb) {
      console.log(accessToken,refreshToken,profile)
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      
    // });
    let user=await User.findOne({email:profile._json.email}).lean().exec();
    if(!user){
let user=await User.create({
    email:profile._json.email,
    password:uuidv4(),
    role:["customer"]
})
    }
    // console.log(profile._json.email)
    // console.log(uuidv4())
    console.log(user)
    return cb(null, user);
  }
));
module.exports=passport;

// client id
 //535691647739-umr4dq5nn9bmapicsj4mrbvd2619qga0.apps.googleusercontent.com
 //535691647739-umr4dq5nn9bmapicsj4mrbvd2619qga0.apps.googleusercontent.com

 // client secret
 //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