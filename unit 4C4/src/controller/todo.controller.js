

const Todo=require("../model/todo.model");

const express=require('express');
const router=express.Router();
const authentication=require('../middleware/authentication')

router.post("",authentication,async(req,res)=>{
    try {
        const todo=await Todo.create(req.body);
        return   res.status(200).send({todo:todo});
    } catch (error) {
        console.log(error)
        return   res.status(401).send({message:error.message})
    }
})
router.patch("/:id",authentication,async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndUpdate(req.param.id,req.body);
        return   res.status(200).send({todo:todo});
    } catch (error) {
        console.log(error)
        return   res.status(401).send({message:error.message})
    }
})
router.delete("/:id",authentication,async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndDelete(req.params.id);
        return   res.status(200).send({todo:todo});
    } catch (error) {
        console.log(error)
        return   res.status(401).send({message:error.message})
    }
})
router.get("",async(req,res)=>{
    try {
        const todo=await Todo.find({}).lean().exec();
        return   res.status(200).send({todo:todo});
    } catch (error) {
        console.log(error)
        return   res.status(401).send({message:error.message})
    }
})