import { pool } from "../utils/db.js";
//DeleteHandler
export async function deleteHandler(req, res) {
  const id = Number(req.query.id);
  try {
    console.log('DeleteHandler id:', id);
    if (!id || isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'Invalid ID' });
      return;
    }
    const result = await pool.query('DELETE FROM todo WHERE id = $1 RETURNING *', [id]);
    console.log('DeleteHandler result:', result.rowCount);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }
    res.status(200).json({ message: 'Task deleted successfully', task: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'DB delete error', details: err.message });
  }
}