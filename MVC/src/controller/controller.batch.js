

const express=require('express');
const app=express();
const router = express.Router()
const Batch=require('../model/model.batch.js');

app.get("/batchs",async(req,res)=>{
    try {
        const batch=await Batch.find({}).lean().exec();
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error);
    }
});

app.post("/batchs",async(req,res)=>{
    try {
        const batch=await Batch.create(req.body)
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error);
    }
});
app.get("/batchs/:id",async(req,res)=>{
    try {
        const batch=await Batch.findById(req.params.id)
        return res.status(200).send(batch)
    } catch (error) {
        console.log(error);
    }
});

module.exports=app;