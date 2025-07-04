import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3001;
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "*";
