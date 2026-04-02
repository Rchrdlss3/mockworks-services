import "dotenv/config";
import { connectToDatabase } from "./utils/database";
import { router } from "./routes/index";
import cors from "cors"
import app from "./app";
const port = Number(process.env.PORT) || 3008;

void connectToDatabase();

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(router);
