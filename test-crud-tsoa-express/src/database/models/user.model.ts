import { model, Schema } from "mongoose";

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    age: number;
    gender: 'male' | 'female' | 'other';
}

const UserSchema : Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
})


export const User = model<IUser>("User", UserSchema);