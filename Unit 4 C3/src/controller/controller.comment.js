

const express=require('express');
const Comment = require('../model/model.comment.js');
const { body, validationResult } = require('express-validator');
  const router=express.Router();
  router.post('',async(req,res)=>{

    try {
        const comment=await Comment.create(req.body);
        return res.status(200).send({comment:comment});
    } catch (error) {
     return res.status(500).send({error:error});
    }
  });
  module.exports=router;