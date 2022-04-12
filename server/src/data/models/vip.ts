import { Schema, model } from "mongoose";

import { IVip } from "../../interface/Vip";

const vipSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 30,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<IVip>('Vip', vipSchema)