import express from "express";
import { db, syncDatabase } from './database';
import router from "./routes/router";

const app = express();
const PORT = 3000;

async function startServer() {
  try {
    await syncDatabase();

    app.use("/api", router)

    app.use(express.json());

    app.use((req, res) => {
      res.status(404).json({ error: "Rota não encontrada." });
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
}
startServer();
