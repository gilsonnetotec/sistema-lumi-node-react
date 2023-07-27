"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Customer extends sequelize_1.Model {
}
Customer.init({
    mesReferencia: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    dataVencimento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    energiaEletrica_kWh: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    energiaEletrica_precoUnit: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    energiaEletrica_valor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    energiaInjetadaHFP_kWh: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    energiaInjetadaHFP_precoUnit: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    energiaInjetadaHFP_valor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    enCompSemICMS_kWh: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    enCompSemICMS_precoUnit: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    enCompSemICMS_valor: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    contribIlumPublicaMunicipal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    valorTotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: database_1.db,
    modelName: 'Customer',
    tableName: 'tb_customers'
});
exports.default = Customer;
