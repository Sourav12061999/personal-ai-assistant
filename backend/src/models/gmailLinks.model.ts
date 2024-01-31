import { Schema, model } from "mongoose";

const GmailLinkSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: false }
});

const GmailLinkModel = model("gmail_link", GmailLinkSchema);

export default GmailLinkModel;

