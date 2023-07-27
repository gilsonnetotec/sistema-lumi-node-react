import express from "express";
import { db, syncDatabase } from './database';

const app = express();
const PORT = 3000;

async function startServer() {
  try {
    await syncDatabase();

    app.use(express.json());

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
}
startServer();
