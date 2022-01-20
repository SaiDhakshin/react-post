
const PostMessage = require('../models/postMessage');

exports.getPosts = async (req,res) => {
    try{
        const PostMessages =await PostMessage.find();
        console.log(PostMessage);

        res.status(200).json(PostMessages);
    }catch(error){
        res.status(404).json({message : error.message});
    }
}

exports.createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try{
       await newPost.save();

       res.status(200).json(newPost);
    }catch(error){
        res.status(409).json({message : error.message});
    }
}

