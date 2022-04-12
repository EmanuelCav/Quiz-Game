import { Document } from "mongoose";

export interface IVip extends Document {
    nickname: string;
    email: string;
    password: string;
}