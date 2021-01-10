import express from "express";
import {getUsers, createUser,updateUser, deleteUser} from '../controllers/users.js'

const router = express.Router()     //Para dar las rutas :)

//localhost:5000/posts (index.js)

router.get('/', getUsers)

router.post('/', createUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)



export default router