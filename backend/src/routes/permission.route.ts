
import { google } from "googleapis"

import { Router } from "express";
import { authenticateWithGoogle } from "../utils";
import { FRONTEND_URL, JWT_SECRET } from "../env";
import { verify } from "jsonwebtoken";
const router = Router();


const DEFAULT_PATH = "/"
router.get('/callback/', async (req, res) => {
    const { code, state, ...rest } = req.query;
    if (!state || typeof state !== "string") {
        return res.status(404).send("Unauthenticated User");
    }
    // const _id = verify(state, JWT_SECRET);
    
    if (typeof code !== "string") {
        return res.status(404).json({
            message: "Invalid Code",
        });;
    }
    const gooleData = await authenticateWithGoogle(code);
    console.log("Here is the goole data", gooleData);
    
    res.redirect(FRONTEND_URL!);
});


export default {router, defaultPath: DEFAULT_PATH};

