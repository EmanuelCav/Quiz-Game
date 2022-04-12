import { Router } from "express";

import * as vipCtrl from '../controller/vip.Ctrl'

import validVip from '../middleware/validation/validVip'

const router = Router()

router.get('/vips', vipCtrl.vips)

router.post('/register', validVip, vipCtrl.register)
router.post('/login', vipCtrl.login)

router.delete('/vips/:id', vipCtrl.removeVip)

export default router