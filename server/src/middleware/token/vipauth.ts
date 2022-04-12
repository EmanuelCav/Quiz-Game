import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

import Vip from '../../data/models/vip';

const { JWTVIP } = process.env;

const auth = async (req: any, res: Response, next: NextFunction) => {

    try {

        const token = req.headers.authorization?.split(" ")[1]

        if(!token) {
            return res.status(401).json({ message: "Token does not exists." })
        }

        const validation = jwt.verify(token, `${JWTVIP}`)

        if(!validation) {
            return res.status(401).json({ message: "Token is not valid." })
        }

        req.vip = validation.id;

        const vip = await Vip.findById(req.vip)

        if(!vip) {
            return res.status(401).json({ message: "Vip does not exists." })
        }

        next();
        
    } catch (error) {
        console.log(error);
    }

}

export default auth