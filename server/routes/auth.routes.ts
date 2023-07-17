import {Router} from 'express'
import { loginHandler, profileHandler } from '../controllers/auth.controller'
import { requiereAuth } from '../middleware/requireAuth'

const router=Router()


router.post('/login',loginHandler)

router.get('/profile', requiereAuth,profileHandler)



export default router
