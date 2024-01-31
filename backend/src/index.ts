import express from 'express';
import { MONGO_URL, PORT } from './env';
import { PermissionRouter } from './routes';
import { connect } from 'mongoose';

const app = express();
app.use(express.json());
app.use(PermissionRouter.defaultPath, PermissionRouter.router);
const startServer = async () => {
    await connect(MONGO_URL);
    app.listen(PORT, () => {
        console.log("Server started at port " + PORT);
    });
}
startServer();
