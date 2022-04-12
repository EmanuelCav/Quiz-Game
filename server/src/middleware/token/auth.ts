import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

import User from '../../data/models/user';

const { JWT } = process.env;

const auth = async (req: any, res: Response, next: NextFunction) => {

    try {

        const token = req.headers.authorization?.split(" ")[1]

        if(!token) {
            return res.status(401).json({ message: "Token does not exists." })
        }

        const validation = jwt.verify(token, `${JWT}`)

        if(!validation) {
            return res.status(401).json({ message: "Token is not valid." })
        }

        req.user = validation.id;

        const user = await User.findById(req.user)

        if(!user) {
            return res.status(401).json({ message: "User does not exists." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default auth