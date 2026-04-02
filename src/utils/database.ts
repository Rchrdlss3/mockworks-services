import mongoose from "mongoose";

export async function connectToDatabase(): Promise<void> {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
  } catch (e) {
    console.error(e);
  }
}
