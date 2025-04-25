import { pool } from "../utils/db.js";
//PostHandler
export async function postHandler(req, res) {
    try {
      const newEntry = req.body;
      const result = await pool.query(
        'INSERT INTO todo (task, username, completed) VALUES ($1, $2, $3) RETURNING *',
        [newEntry.task, newEntry.username, false]
      );
      console.log('PostHandler result:', result.rows[0]);
      res.status(201).json({
        message: 'Task added successfully',
        todo: result.rows[0]
      });
    } catch (err) {
      res.status(500).json({ error: 'DB insert error', details: err.message });
    }
  }