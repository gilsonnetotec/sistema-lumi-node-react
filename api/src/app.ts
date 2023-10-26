import express from "express";
import cors from "cors";
import { db, syncDatabase } from './database';
import router from "./routes/router";

const app = express();
const PORT = 3000;

async function startServer() {
  try {
    await syncDatabase();

    app.use(cors());
    app.use(express.json());

    app.use("/api", router)

    app.use((req, res) => {
      res.status(404).json({ error: "Rota não encontrada." });
    });

    app.listen(PORT, () => {
      console.log(`Servidor backend iniciado na porta ${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
}
startServer();
