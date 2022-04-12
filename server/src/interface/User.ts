import { Document } from "mongoose";

export interface IUser extends Document {
    nickname: string;
}