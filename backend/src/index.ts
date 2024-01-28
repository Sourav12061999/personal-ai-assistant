import express from 'express';
import { PORT } from './env';
import {AuthRouter} from './routes';

const app = express();
app.use(express.json());

app.use(AuthRouter.defaultPath, AuthRouter.router);
app.listen(PORT, () => {
    console.log("Server started at port " + PORT);
});