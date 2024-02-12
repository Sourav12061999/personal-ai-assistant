import { Schema, model } from "mongoose";

const GmailLinkSchema = new Schema({
    email: { type: String, required: true },
    userID: { type: Schema.ObjectId, required: true, ref: 'users' },
    token: { type: String, required: true },
    expiry: { type: Number, required: true, },
    refreshToken: { type: String, required: false }
});

const GmailLinkModel = model("gmail_link", GmailLinkSchema);

export default GmailLinkModel;

