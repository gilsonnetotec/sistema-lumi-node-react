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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
const customerService_1 = __importDefault(require("../services/customerService"));
function getAllCustomers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const customers = yield customerService_1.default.getAllCustomers();
        res.json(customers);
    });
}
exports.getAllCustomers = getAllCustomers;
function getCustomerById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const customer = yield customerService_1.default.getCustomerById(Number(id));
        if (customer) {
            res.json(customer);
        }
        else {
            res.status(404).json({ message: 'Cliente não encontrado.' });
        }
    });
}
exports.getCustomerById = getCustomerById;
function createCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const customerData = req.body;
        const createdCustomer = yield customerService_1.default.createCustomer(customerData);
        res.json(createdCustomer);
    });
}
exports.createCustomer = createCustomer;
function updateCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const customerData = req.body;
        const updatedCustomer = yield customerService_1.default.updateCustomer(Number(id), customerData);
        if (updatedCustomer) {
            res.json(updatedCustomer);
        }
        else {
            res.status(404).json({ message: 'Cliente não encontrado.' });
        }
    });
}
exports.updateCustomer = updateCustomer;
function deleteCustomer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const deleted = yield customerService_1.default.deleteCustomer(Number(id));
        if (deleted) {
            res.json({ message: 'Cliente excluído com sucesso.' });
        }
        else {
            res.status(404).json({ message: 'Cliente não encontrado.' });
        }
    });
}
exports.deleteCustomer = deleteCustomer;
