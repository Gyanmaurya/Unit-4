

const express=require('express');
// const app=express();
const User=require('../model/model.user.js');
const router = express.Router()


router.get("",async(req,res)=>{
    try {
        const user=await User.find({}).lean().exec();
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});

router.post("",async(req,res)=>{
    try {
        const user=await User.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});
router.get("/:id",async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});
router.patch("/:id",async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});
router.delete("/:id",async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;