

const express=require('express');
// const app=express();
const router=express.Router();
const Submission=require('../model/model.submision.js');

router.get("/submisions",async(req,res)=>{
    try {
        const submision=await Submission.find({}).lean().exec();
        return res.status(200).send(submision)
    } catch (error) {
        console.log(error);
    }
});

router.post("/submisions",async(req,res)=>{
    try {
        const submision=await Submission.create(req.body)
        return res.status(200).send(submision)
    } catch (error) {
        console.log(error);
    }
});
router.get("/submisions/:id",async(req,res)=>{
    try {
        const submision=await Submission.findById(req.params.id)
        return res.status(200).send(submision)
    } catch (error) {
        console.log(error);
    }
    
});

module.exports=router;