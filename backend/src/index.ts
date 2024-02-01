import express from 'express';
import { MONGO_URL, PORT } from './env';
import { PermissionRouter, AuthRouter } from './routes';
import { connect } from 'mongoose';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(PermissionRouter.defaultPath, PermissionRouter.router);
app.use(AuthRouter.defaultPath, AuthRouter.router);

const startServer = async () => {
    await connect(MONGO_URL);
    app.listen(PORT, () => {
        console.log("Server started at port " + PORT);
    });
}
startServer();
