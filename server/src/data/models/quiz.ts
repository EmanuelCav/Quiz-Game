import { Schema, model, Types } from "mongoose";

import { IQuiz } from "../../interface/Quiz";

const { ObjectId } = Types

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true
    },
    description: {
        type: String,
        maxlength: 80,
        trim: true
    },
    code: {
        type: String,
        requied: true,
        trim: true,
        unique: true
    },
    participants: [{ type: ObjectId, ref: 'User' }],
    amount: {
        type: Number,
        required: true,
    },
    questions: [],
    user: {
        type: ObjectId,
        ref: 'Vip'
    },
    type: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<IQuiz>('Quiz', quizSchema)