
const Gallary = require("../model/model.gallary.js");

const express = require('express');
const router = express.Router();

router.get("", async (req, res) => {

    try {
        const gallary = await Gallary.find({}).lean().exec();
        res.send(gallary);
    } catch (error) {
        console.log(error)
    }
})
router.post("", async (req, res) => {

    try {
        const gallary = await Gallary.create(req.body);
        res.send(gallary);
    } catch (error) {
        console.log(error)
    }
})
module.exports=router;