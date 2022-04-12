import { Request, Response, NextFunction } from "express";

const validAuth = (req: Request, res: Response, next: NextFunction) => {

    const { nickname } = req.body;

    const symbols = ["<", ">", ",", ";", ":", ".", "-", "_", "-", "{", "}", "[", "]", "^", "`", "´", "¨", "+", "*", "~", "|", "°", "¬", "!", '"', "#", "$", "%", "&", "/", "(", ")", "=", "?", "'", "¡", "¿", "@"]

    try {

        if(!nickname) {
            return res.status(400).json({ message: "You have to write a nickname." })
        }

        if(nickname.length > 30) {
            return res.status(400).json({ message: "The nickname has to have less than 30 characters." })
        }

        for(var i = 0; i < symbols.length; i++) {
            for(var j = 0; j < nickname.length; j++) {
                if(nickname[j] == symbols[i]) {
                    return res.status(400).json({ message: "We cannot let symbols." })
                }
            }
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default validAuth