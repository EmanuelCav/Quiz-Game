import { Document } from "mongoose";

export interface IQuiz extends Document {
    title: string;
    description: string;
    code: string;
    user: any;
    amount: number;
    participants: any[];
    questions: object[];
    type: string;
}