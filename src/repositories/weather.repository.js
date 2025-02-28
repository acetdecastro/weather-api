const { pool } = require("../db");

exports.getAllAlerts = async () => {
  const result = await pool.query(
    "SELECT * FROM alerts ORDER BY created_at DESC"
  );
  return result.rows;
};

exports.createAlert = async (message) => {
  const query =
    "INSERT INTO alerts (message, created_at) VALUES ($1, NOW()) RETURNING *";
  const values = [message];
  const result = await pool.query(query, values);
  return result.rows[0];
};
