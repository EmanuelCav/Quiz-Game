import { Schema, model } from "mongoose";

import { IUser } from "../../interface/User";

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model<IUser>('User', userSchema)