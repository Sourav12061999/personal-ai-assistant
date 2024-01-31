
import { google } from "googleapis"

import { Router } from "express";
import { authenticateWithGoogle } from "../utils";
import { FRONTEND_URL } from "../env";
const router = Router();


const DEFAULT_PATH = "/"
router.get('/callback', async (req, res) => {
    const { code } = req.query;
    if (typeof code !== "string") {
        return res.status(404).json({
            message: "Invalid Code",
        });;
    }
    const { tokens } = await authenticateWithGoogle(code);
    res.redirect(FRONTEND_URL!);
});


export default {router, defaultPath: DEFAULT_PATH};

