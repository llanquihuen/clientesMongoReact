import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js' //Esquema json mongoose

export const getPosts = async (req, res)=>{
    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message+"2"})
    }    
}
export const createPost = async(req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})

    }
}
export const updatePost = async (req,res)=>{
    // console.log(req.params);
    const { id: _id} = req.params; //desestructuracion de objetos

    const post = req.body //esto es enviado desde desde el frontend

    //------ MONGOOSE isValid & findByIdAndUpdate ------// 
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    // const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new:true})
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new:true})


    res.json(updatedPost)
}

export const deletePost = async (req,res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);
    res.json({message:'Post deleted'})
}

export const likePost = async (req,res)=>{
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    console.log(req)
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount + 1}, { new: true})

    res.json(updatedPost)
}