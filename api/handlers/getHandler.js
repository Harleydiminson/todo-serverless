import { pool } from "../utils/db.js";
//GetHandler
export async function getHandler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM todo');
    console.log('GetHandler result:', result.rows);
    res.status(200).json(
      result.rows
    );
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: err.message });
  }
}