import { Router } from "express";

import * as quizCtrl from '../controller/quiz.Ctrl'

import validQuiz from '../middleware/validation/validQuiz';

import auth from '../middleware/token/auth';
import vipAuth from '../middleware/token/vipauth'

const router = Router()

router.get('/allquiz', vipAuth, quizCtrl.allQuiz)
router.get('/quiz/:code', auth, quizCtrl.quiz)
router.get('/quizvip/:code', vipAuth, quizCtrl.quiz)
router.get('/myquiz', vipAuth, quizCtrl.myQuiz)

router.post('/createquiz', vipAuth, validQuiz, quizCtrl.createQuiz)

router.delete('/quiz/:code', vipAuth, quizCtrl.deleteQuiz)

router.patch('/updatequiz/:id', vipAuth, quizCtrl.updateQuiz)
router.patch('/joinquiz/:code', vipAuth, quizCtrl.joinQuiz)
router.patch('/joinquizuser/:code', auth, quizCtrl.joinQuizUser)

export default router