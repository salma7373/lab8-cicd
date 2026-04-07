const express = require('express');
const { Pool } = require('pg'); 
const app = express();
const port = 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks'); 
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to DB");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
