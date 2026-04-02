import "dotenv/config";
import { router } from "./routes/index";
import cors from "cors"
import app from "./app";
import { Response } from "express";

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.get('/',(res:Response) => {
  res.send('Welcome to Mockworks Services')
});

app.use(cors(corsOptions));
app.use(router);
