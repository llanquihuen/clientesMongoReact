import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import postRoutes from "./routes/post.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"

import authToken from './middle/AuthToken.js'

const app = express(); 
dotenv.config()

// BODYPARSER (2nd answer) https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327
app.use(bodyParser.json({limit: "30mb", extended:true})); //Controla el tamaño maximo del request. // The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors()); //primero cors, despues la ruta


app.use(authToken)
app.use('/users', userRoutes) //ruta
app.use('/posts', postRoutes) //ruta
app.use('/auth', authRoutes) //ruta

app.get('/', (req,res)=>{
    res.send("Bienvenido a Clientes API")
})




const PORT = process.env.PORT || 5000;
//Conectarse a MongoDB
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})   //true to use new connection engine
    .then(()=> app.listen(PORT , () => console.log(`Servidor corriendo en el puerto ${PORT}.`))) //express listen a specifed host /port ej: app.listen(3000)
    .catch((error)=> console.log(error.message))


    //just to not get warnings in the console
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);