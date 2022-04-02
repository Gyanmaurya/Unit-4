const User = require("../model/model.user.js");

const express = require('express');
const upload = require("../midileware/upload.js")
const router = express.Router();
const path=require('path');

router.get("", async (req, res) => {

    try {
        const user = await User.find({}).lean().exec();
        return res.send(user);
    } catch (error) {
        console.log(error)
    }
});
router.post("", upload.single("profilepic"), async (req, res) => {

    try {
        console.log(req.file.path)
        const user = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            profilepic: req.file.path,

        })
        res.send(user);
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;