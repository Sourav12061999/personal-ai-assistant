import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: false }
});

const UserModel = model("users", UserSchema);

export default UserModel;

