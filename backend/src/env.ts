import { z } from "zod";
import "dotenv/config";

const PORT = parseInt(process.env.PORT || "3000");
const FRONTEND_URL = process.env.FRONTEND_URL
z.number().parse(PORT); // if the port doesn't exist throw error by zod


export { PORT, FRONTEND_URL };