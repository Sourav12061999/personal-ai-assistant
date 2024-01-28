
import { google } from "googleapis"

import { Router } from "express";
import { authenticateWithGoogle } from "../utils";
const router = Router();
router.get('/callback', async (req, res) => {
    const { code } = req.query;
    if (typeof code !== "string") {
        return res.status(404).json({
            message: "Invalid Code",
        });;
    }
    const { tokens } = await authenticateWithGoogle(code);
    res.status(200).json({
        tokens
    });
});


export default {router, defaultPath: "/"};

