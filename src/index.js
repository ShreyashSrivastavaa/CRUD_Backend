import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import errorHandling from './middlewares/errorHandler.js';
import { createUserTable } from './data/createUserTable.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

app.use(errorHandling);

createUserTable();


app.get('/', async (req, res) => {
  const result = await pool.query('SELECT current_database()');
  res.send(`Database: ${result.rows[0].current_database}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
