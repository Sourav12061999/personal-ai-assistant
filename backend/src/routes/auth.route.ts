import { Router } from "express";
import { UserModel } from "../models";
import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "src/env";

const router = Router();

router.post("/signin", async (req, res) => { 
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email }).lean().exec();
        if (!user) { 
            return res.status(404).json({
                msg: "User doen't exist",
            });
        }

        if (user.password !== password) { 
            return res.status(404).json({
                msg: "User doen't exist",
            });
        }
        const jwtToken = sign(user.email, JWT_SECRET);
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
    }
})