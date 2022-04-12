import { Request, Response } from "express";

import Quiz from '../data/models/quiz'

import { IQuiz } from "../interface/Quiz";

export const allQuiz = async (req: any, res: Response): Promise<Response> => {

    try {

        const showQuiz = await Quiz.find({ type: "Public" })

        const showOtherQuiz = showQuiz.filter(quiz => quiz.user != req.vip)

        return res.json(showOtherQuiz)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const myQuiz = async (req: any, res: Response): Promise<Response> => {

    try {

        const myquiz = await Quiz.find({ user: req.vip })

        if(myquiz.slice(-1)[0].amount != myquiz.slice(-1)[0].questions.length) {
            await Quiz.findByIdAndDelete(myquiz.slice(-1)[0]._id)
        }

        return res.status(200).json(myquiz)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const quiz = async (req: Request, res: Response): Promise<Response> => {

    const { code } = req.params;

    try {

        const showQuiz = await Quiz.findOne({ code: code })
        .populate("user", "nickname")

        if (!showQuiz) {
            return res.status(400).json({ message: "That code does not exists." })
        }

        return res.status(200).json(showQuiz)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const createQuiz = async (req: any, res: Response): Promise<Response> => {

    const { title, description, type, amount } = req.body;

    let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    let code = "";

    do {
        for (var i = 0; i < 10; i++) {
            const randomCharacter = shuffle(characters)
            code += randomCharacter[i];
        }
        var quizExist = await Quiz.find({ code: code })
    } while (quizExist.length > 0)

    try {

        const newQuiz: IQuiz = new Quiz({
            title,
            description,
            code,
            amount,
            questions: [],
            user: req.vip,
            type,
        })

        const savedQuiz = await newQuiz.save()

        return res.status(200).json(savedQuiz)

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const deleteQuiz = async (req: any, res: Response): Promise<Response> => {

    const { code } = req.params;

    try {

        const quiz = await Quiz.findOne({ code: code })

        if (req.vip != quiz?.user) {
            return res.status(401).json({ message: "You cannot remove it." })
        }

        await Quiz.findOneAndDelete({ code: code })

        return res.status(200).json({ message: "The quiz was removed successfully." })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const updateQuiz = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    const { question, correctOption, optionOne, optionTwo, optionThree } = req.body;

    if(!question || !correctOption || !optionOne || !optionTwo || !optionThree) {
        return res.status(400).json({ message: "There are empty fields" })
    }

    if(question.length > 40) {
        return res.status(400).json({ message: "Question must be less than 40 characters" })
    }
    if(correctOption.length > 20 || optionOne.length > 20 || optionTwo.length > 20  || optionThree.length > 20 ) {
        return res.status(400).json({ message: "Options must not be more than 20 characters." })
    }

    try {

        const quizUpdated = await Quiz.findByIdAndUpdate(id, {
            $push: {
                questions: {
                    question,
                    options: [correctOption, optionOne, optionTwo, optionThree]
                }
            }
        }, {
            new: true
        })

        return res.status(200).json({
            message: "The quiz was created successfully",
            quiz: quizUpdated
        })

    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const joinQuiz = async (req: any, res: Response): Promise<Response> => {

    const { code } = req.params;

    try {

        const quiz = await Quiz.findOne({ code: code })

        if(quiz?.participants.find((participant: any) => participant == req.vip)) {
            return res.status(401).json({ message: "You already participate here" })
        }
        
        const join = await Quiz.findOneAndUpdate({ code: code }, {
            $push: {
                participants: req.vip
            }
        }, {
            new: true
        })

        return res.status(200).json(join)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const joinQuizUser = async (req: any, res: Response): Promise<Response> => {

    const { code } = req.params;

    try {

        const quiz = await Quiz.findOne({ code: code })

        if(quiz?.participants.find((participant: any) => participant == req.user)) {
            return res.status(401).json({ message: "You already participate here" })
        }
        
        const join = await Quiz.findOneAndUpdate({ code: code }, {
            $push: {
                participants: req.user
            }
        }, {
            new: true
        })

        return res.status(200).json(join)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}


function shuffle(array: string[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}