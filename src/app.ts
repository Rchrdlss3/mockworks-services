import "dotenv/config";
import cors from "cors";
import express from "express";
import { router } from "./routes/index";
import { connectToDatabase } from "./utils/database";
import type { Response, Request } from "express";

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000","https://rchrdlss3.github.io", "https://rchrdlss3.github.io/mockworks"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  credentials: true
};
app.use(cors(corsOptions));


  app.use(express.json());
  app.get('/',(req:Request, res:Response) => {
    res.status(200).json('Welcome to Mockworks Services')
  });
  app.use(router);
  app.listen(8000)
  connectToDatabase();
  export default app;