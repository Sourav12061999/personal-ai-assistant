import { z } from "zod";

const PORT = process.env.PORT || 3000;
z.number().parse(PORT); // if the port doesn't exist throw error by zod


export { PORT };