import { pool } from '../utils/db.js'
//PutHandler
export async function putHandler(req, res) {
    const id = Number(req.query.id);
    const { completed } = req.body;
    try {
        if (!id || isNaN(id) || !Number.isInteger(id)) {
            res.status(400).json({ error: 'Invalid ID' });
            return;
          }
        const result = await pool.query(
            'UPDATE todo SET completed = $1 WHERE id = $2 RETURNING *',
            [completed, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        console.log('PutHandler result:', result.rows[0]);
        res.status(200).json({
            message: 'Task updated',
            updatedTask: result.rows[0],
        });
    } catch (err) {
        console.error('DB error:', err);
        res.status(500).json({ error: err.message });
    }
}
