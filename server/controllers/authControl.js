import users from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


const login = (req,res)=>{
    let username = req.body.username;
    let password =req.body.password;
    const theToken = process.env.SECRET_TOKEN;

    
    users.findOne({username})
    .then(user => {
        if(!user) return res.status(404).send({message: 'No existe el usuario'})
        bcrypt.compare(password, user.password)
            .then(match => {
                if(match){
                    const token = jwt.sign(
                        {
                            username:user.username,
                            password:user.password,
                            role: user.role
                        },
                        theToken,{
                            expiresIn:"1h"
                        }
                    );
                    res.status(200).json({
                        message:"Acceso autorizado",
                        token:token
                    })
                    // const payload={
                    //     username:user.username,
                    //     email:user.email,
                    //     name:user.name
                    // }
                    // jwt.sign({payload, theToken, function (error,token) {
                    //     if(error){
                    //         res.status(500).send({error});
                    //     }else{
                    //         res.status(200).send({message:'Acceso',token})
                    //     }
                        
                    // }})
                }else{
                    res.status(200).send({message: 'Password incorrecto'});

                }
            }).catch(error => {
                console.log(error);
                res.status(500).send({message:'error 1',error});
            });                
    }).catch(error => {
            console.log(error);
            res.status(500).send({message:'error 2',error});
        });
}

export default login