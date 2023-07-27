import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Bem-vindo à dashboard Gilson!" });
});

export {router as dashboardRoutes} ;

