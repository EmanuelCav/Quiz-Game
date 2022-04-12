import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
import './data/database/database'

app.set('port', process.env.PORT || 4200)

import userRouter from './routes/user.routes'
import quizRouter from './routes/quiz.routes'
import vipRouter from './routes/vip.routes'

app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(userRouter)
app.use(quizRouter)
app.use(vipRouter)

app.listen(app.get('port'), () => {
    console.log("Server on port:", app.get('port'));
})