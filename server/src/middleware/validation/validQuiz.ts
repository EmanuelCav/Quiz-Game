import { Request, Response, NextFunction } from "express";

const validQuiz = (req: Request, res: Response, next: NextFunction) => {

    const { title, description, amount, type } = req.body;    

    const types = ["Private", "Public"];

    try {

        if(!title) {
            return res.status(400).json({ message: "You have to write a title." })
        }

        if(!amount) {
            return res.status(400).json({ message: "Write the amount of questions." })
        }

        if(title.length > 30) {
            return res.status(400).json({ message: "The title has to have less than 30 characters." })
        }

        if(description.length > 80) {
            return res.status(400).json({ message: "The description has to have less than 80 characters." })
        }

        var found = false

        for(var i = 0; i < types.length; i++) {
            if(type == types[i]) {
                found = true;
                break;
            }
        }

        if(!found) {
            return res.status(400).json({ message: "Select a type." })
        }

        if(amount < 1 || amount > 20) {
            return res.status(400).json({ message: "The amount of questions allowed is between 1 and 20." })
        }

        var amountInt = parseInt(amount)

        if(isNaN(amountInt)) {
            return res.status(400).json({ message: "Try to write an integer number in amount of questions." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default validQuiz