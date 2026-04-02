import mongoose from "mongoose";
import { attachDatabasePool } from "@vercel/functions";

let cachedConnection:  typeof mongoose | null = null;

export async function connectToDatabase(): Promise<void> {
  if (cachedConnection) {
    return;
  }

  try {
    const connection  = await mongoose.connect(process.env.DATABASE_URL as string);
    attachDatabasePool(connection.connection.getClient());
    cachedConnection = connection
  } catch (e) {
    cachedConnection = null;
    console.error(e);
  }
}
