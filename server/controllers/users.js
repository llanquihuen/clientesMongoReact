import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js';
import UserModel from '../models/userModel.js' //Esquema json mongoose

export const getUsers = async (req, res)=>{
    try {
        const userModels = await UserModel.find();

        // console.log(userModels);

        res.status(200).json(userModels);
    } catch (error) {
        res.status(404).json({message: error.message+"2"})
    }    
}
export const createUser = async(req, res)=>{
    const user = req.body;
    const newUser = new UserModel(user)
    try {
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})

    }
}
export const updateUser = async (req,res)=>{
    // console.log(req.params);
    const { id: _id} = req.params; //desestructuracion de objetos

    const user = req.body //esto es enviado desde desde el frontend

    //------ MONGOOSE isValid & findByIdAndUpdate ------// 
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

    // const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new:true})
    const updatedUser = await UserModel.findByIdAndUpdate(_id, {...user, _id}, {new:true})


    res.json(updatedUser)
}

export const deleteUser = async (req,res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No user with that id');

    await UserModel.findByIdAndRemove(id);
    res.json({message:'User deleted'})
}