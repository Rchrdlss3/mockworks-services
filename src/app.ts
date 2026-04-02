import cors from "cors";
import express from "express";
import { router } from "./routes/index";

const corsOptions = {
  origin: ["http://localhost:3000"],
};

  const app = express();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(router);

  export default app;