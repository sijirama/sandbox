import mongoose from "mongoose";

export interface UserType extends mongoose.Document {
    name: string;
    email: string;
    password: string;

}

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

export const UserModel = mongoose.model("User", UserSchema)