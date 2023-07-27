"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDatabase = exports.db = void 0;
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('lumi', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: false
    }
});
exports.db = db;
function syncDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db.sync({ alter: true });
            console.log('Modelo sincronizado com o banco de dados.');
        }
        catch (err) {
            console.error('Erro ao sincronizar o modelo:', err);
        }
    });
}
exports.syncDatabase = syncDatabase;
