import "dotenv/config";
import { router } from "./routes/index";
import cors from "cors"
import app from "./app";
import type { Response, Request } from "express";

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.get('/',(req:Request, res:Response) => {
  res.status(200).json('Welcome to Mockworks Services')
});

app.use(cors(corsOptions));
app.use(router);
