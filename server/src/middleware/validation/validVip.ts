import { Request, Response, NextFunction } from "express";

import Vip from '../../data/models/vip'

const validAuth = async (req: Request, res: Response, next: NextFunction) => {

    const { nickname, email, password, confirm } = req.body;

    const symbols = ["<", ">", ",", ";", ":", ".", "-", "_", "-", "{", "}", "[", "]", "^", "`", "´", "¨", "+", "*", "~", "|", "°", "¬", "!", '"', "#", "$", "%", "&", "/", "(", ")", "=", "?", "'", "¡", "¿", "@"]

    try {

        if(!nickname || !email || !password || !confirm) {
            return res.status(400).json({ message: "There are empty fields." })
        }

        if(password.length < 6) {
            return res.status(400).json({ message: "Password must be more than 6 characters." })
        }

        if(password != confirm) {
            return res.status(400).json({ message: "Passwords do not match." })
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

        const emailValid = validateEmail(email)

        if(!emailValid) {
            return res.status(400).json({ message: "That email is not valid." })
        }

        const nickExists = await Vip.findOne({ nickname: nickname })

        if(nickExists?.nickname == nickname) {
            return res.status(400).json({ message: "That nickname already exists. Try again" })
        }

        if(nickExists?.email == email) {
            return res.status(400).json({ message: "That email already exists. Try again" })
        }
        
        next();
        
    } catch (error) {
        console.log(error);
    }

}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export default validAuth