const User=require("../model/model.user.js");
const express=require('express');
const app = require("../index.js");
const router=express.Router();
const transporter=require("../config/mail.js")
const path=require('path')

router.get("",async(req,res)=>{
    try {
     const page=req.query.page || 1;
     const pagesize=req.query.pagesize || 10;
     const skip=(page-1)*pagesize;

     
        const user=await User.find({}).skip(skip).limit(pagesize).lean().exec();
        const totalpage=Math.ceil((await User.find().countDocuments())/pagesize);
      return  res.status(200).send({user,totalpage})
    } catch (error) {
        console.log(error)
      return  res.status(500).send(error)
    }

})

router.post("",async(req,res)=>{
  try {
    const user=await User.create(req.body)
     transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: user.senderMail, // list of receivers
      subject: "Welcome to ABC system Gyan Maurya", // Subject line
      text: " Hi Gyan, Please confirm your email address create a set of admins", // plain text body
      html: "<b>Hello world?</b>", // html body
      
    //   alternatives: [
    //     {
          
    //         contentType: 'text/html',
    //         path: path.join(__dirname,"../mails/file.html"),
    //     },
    //     {
    //       filename: 'file.text',
    //       path: path.join(__dirname,"../mails/file.text")
    //   }
    // ]

    });

    res.send("User mail send succesfully")
  } catch (error) {
    console.log(error)
  }
})
console.log(__dirname)

module.exports=router;