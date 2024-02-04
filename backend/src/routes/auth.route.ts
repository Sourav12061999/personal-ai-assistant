import { Router } from "express";
import { UserModel } from "../models";
import { sign, decode, verify } from "jsonwebtoken";
import { JWT_SECRET } from "../env";
import { tokenSplitter } from "../utils";

const DEFAULT_PATH = "/auth";
const router = Router();

router.post("/signin", async (req, res) => { 
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email }).lean().exec();
        if (!user) { 
            return res.status(500).json({
                msg: "User Not Found",
            });
        }

        if (user.password !== password) { 
            return res.status(500).json({
                msg: "User Not Found",
            });
        }
        const jwtToken = sign({ _id: user._id.toString() }, JWT_SECRET);
        res.status(200).json({
            msg: "Signin Successful",
            data: {
                email: user.email,
                token: jwtToken
            }
        })
    } catch (error) {
        res.status(500).json({
            msg: "Some Error Occurred",
            error,
        });
        console.log("Signin:- ",error);
    }
})

router.get("/verify-token", async (req, res) => { 
    try {
        let header = req.headers.authorization;
        const token = tokenSplitter(header || "");
        if (!token) {
            return res.status(401).json({ msg: "Unauthorized - Token not provided" });
        }


        const _id = verify(token, JWT_SECRET);
        
        const user = await UserModel.findById(_id).lean().exec();
        if (!user) {
            return res.status(401).json({ msg: "Unauthorized User" });
        }

        return res.status(200).json({ msg: "User Verified Successfully" });
    } catch (error) {
        res.status(500).json({
            msg: "Some Error Occurred",
            error,
        });
        
    }
})

export default { router, defaultPath:DEFAULT_PATH};