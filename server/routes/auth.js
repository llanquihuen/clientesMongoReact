import express from 'express'
import authCtrl from '../controllers/authControl.js'



const router = express.Router()

router.post('/login', authCtrl);

export default router