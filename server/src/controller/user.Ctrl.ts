import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

import User from '../data/models/user'

import { IUser } from "../interface/User";

const { JWT } = process.env;

export const users = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showUsers = await User.find()

        return res.status(200).json(showUsers)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const createUser = async (req: Request, res: Response): Promise<Response> => {

    const { nickname } = req.body;

    try {

        const newUser: IUser = new User({
            nickname
        })

        const savedUser = await newUser.save()

        const token = jwt.sign({ id: newUser._id }, `${JWT}`, {
            expiresIn: "5h"
        })

        return res.status(200).json({
            message: "WELCOME!",
            user: savedUser,
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        await User.findByIdAndDelete(id)

        return res.status(200).json("User removed successfully.")
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

