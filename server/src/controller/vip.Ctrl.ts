import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Vip from '../data/models/vip'

import { IVip } from "../interface/Vip";

const { JWTVIP } = process.env;

export const vips = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showVips = await Vip.find().select("-password")

        return res.status(200).json(showVips)
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const register = async (req: Request, res: Response): Promise<Response> => {

    const { nickname, email, password, confirm } = req.body;

    const salt = await bcrypt.genSalt(8)
    const pass = await bcrypt.hash(password, salt)

    try {

        const newVip: IVip = new Vip({
            nickname,
            email,
            password: pass,
            confirm
        })

        const vipSaved = await newVip.save()

        const token: string = jwt.sign({ id: newVip._id }, `${JWTVIP}`, {
            expiresIn: '7d'
        })

        return res.status(200).json({
            vip: vipSaved,
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    try {

        if(!email || !password) {
            return res.status(400).json({ message: "There are empty fields." })
        }

        const vip = await Vip.findOne({ email: email })

        if(!vip) {
            return res.status(400).json({ message: "User does not exists. Please try again." })
        }

        const validation = await bcrypt.compare(password, vip.password)

        if(!validation) {
            return res.status(400).json({ message: "Fields do not match. Please try again." })
        }

        const token: string = jwt.sign({ id: vip._id }, `${JWTVIP}`, {
            expiresIn: '7d'
        })

        return res.status(200).json({
            vip,
            token
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}

export const removeVip = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;

    try {

        await Vip.findByIdAndDelete(id)

        return res.status(200).json({
            message: "Vip was removed."
        })
        
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }

}