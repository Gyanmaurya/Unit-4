

const express=require('express');
const Book = require('../model/model.book.js');
const { body, validationResult } = require('express-validator');
  const router=express.Router();
  router.post('',body("likes").not().isEmpty().isLength({min:0}),async(req,res)=>{

    try {
        const book=await Book.create(req.body);
        return res.status(200).send({book:book});
    } catch (error) {
     return res.status(500).send({error:error});
    }
  });
  module.exports=router;