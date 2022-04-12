import { Router } from "express";

import * as usersCtrl from '../controller/user.Ctrl'

import validAuth from '../middleware/validation/validAuth'

const router = Router()

router.get('/users', usersCtrl.users)

router.post('/createuser', validAuth, usersCtrl.createUser)

router.delete('/users/:id', usersCtrl.deleteUser)

export default router