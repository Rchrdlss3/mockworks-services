import "dotenv/config";
import { createApp } from "./app";
import { connectToDatabase } from "./utils/database";
import { router } from "./routes/index";
import cors from "cors"
const app = createApp();
const port = Number(process.env.PORT) || 3008;

void connectToDatabase();

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(router);
