const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const RETRY_DELAY = 5000;
let isConnected = false;

async function connectToDatabase() {
  try {
    const client = await pool.connect();
    console.log("Successfully connected to the database");
    isConnected = true;
    client.release();
  } catch (error) {
    console.error("Database connection failed");
    isConnected = false;
    retryConnection();
  }
}

// Retry connection in the background without blocking Express
function retryConnection() {
  setTimeout(async () => {
    if (!isConnected) {
      console.log("Retrying database connection...");
      await connectToDatabase();
    }
  }, RETRY_DELAY);
}

pool.on("error", async (err) => {
  console.error("Unexpected database error:", err.message);
  isConnected = false;
  retryConnection();
});

module.exports = {
  pool,
  connectToDatabase,
};
