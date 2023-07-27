"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dashboardRoutes_1 = require("./dashboardRoutes");
const router = express_1.default.Router();
router.use("/dashboard", dashboardRoutes_1.dashboardRoutes);
exports.default = router;
