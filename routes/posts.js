const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req,res) =>{
    res.send('Hello Word from post reques');
});

router.post('/', async (req,res) => {
     console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });  
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;