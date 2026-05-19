import dotenv from "dotenv";
import pg from "pg";

dotenv.config({});

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

pool.on("connect", () => console.log("Connected to database..."));

export default pool;
