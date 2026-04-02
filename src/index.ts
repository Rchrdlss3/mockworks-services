import "dotenv/config";
import { createApp } from "./app.js";
import { connectToDatabase } from "./utils/database.js";
import { router } from "./routes/index.js";
import cors from "cors"
const app = createApp();
const port = Number(process.env.PORT) || 3008;

void connectToDatabase();

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
app.use(router);
