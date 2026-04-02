import cors from "cors";
import express from "express";
import { router } from "./routes/index";
import { connectToDatabase } from "./utils/database";

const corsOptions = {
  origin: ["http://localhost:3000","https://rchrdlss3.github.io"],
};

  const app = express();
  app.listen(3008)

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(router);
  connectToDatabase();
  export default app;