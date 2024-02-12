
import { google } from "googleapis"
import { Router } from "express";
import { authenticateWithGoogle } from "../utils";
import { FRONTEND_URL, JWT_SECRET } from "../env";
import { verify } from "jsonwebtoken";
import GmailLinkModel from "../models/gmailLinks.model";
const router = Router();


const DEFAULT_PATH = "/"
router.get('/callback/', async (req, res) => {
    try {
        const { code, state, ...rest } = req.query;
        if (!state || typeof state !== "string") {
            return res.status(404).send("Unauthenticated User");
        }
        const _id = verify(state, JWT_SECRET);

        if (typeof code !== "string") {
            return res.status(404).json({
                message: "Invalid Code",
            });;
        }
        const gooleData = await authenticateWithGoogle(code);
        if (!gooleData.data.emailAddresses) return;
        console.log("Here is the goole data", gooleData.tokens);
        const gmailLink = await GmailLinkModel.findOne({ email: gooleData.data.emailAddresses[0].value });
        if (gmailLink) {
            await GmailLinkModel.findByIdAndUpdate(gmailLink._id, {
                token: gooleData.tokens.access_token, expiry: gooleData.tokens.expiry_date,
                refreshToken: gooleData.tokens.refresh_token
            },);
        } else {
            await GmailLinkModel.create({
                email: gooleData.data.emailAddresses[0].value,
                userID: _id,
                token: gooleData.tokens.access_token,
                expiry: gooleData.tokens.expiry_date,
                refreshToken: gooleData.tokens.refresh_token
            });
        }
        res.redirect(FRONTEND_URL!);
    }
    catch (error) {
        res.status(500).json({ message: "some error happened" });
    }
});


export default { router, defaultPath: DEFAULT_PATH };

