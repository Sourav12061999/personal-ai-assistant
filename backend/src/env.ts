import { z } from "zod";
import "dotenv/config";

const PORT = parseInt(process.env.PORT || "3000");
const FRONTEND_URL = process.env.FRONTEND_URL
const MONGO_URL = process.env.MONGO_URL!;
const JWT_SECRET = process.env.JWT_SECRET!;
z.number().parse(PORT); // if the port doesn't exist throw error by zod
z.string().parse(MONGO_URL); // if the mongo url doesn't exist throw error by zod
z.string().parse(JWT_SECRET); // if the jwt secret doesn't exist throw error by zod


export { PORT, FRONTEND_URL, MONGO_URL, JWT_SECRET };