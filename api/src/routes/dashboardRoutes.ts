import express, { Request, Response } from "express";
import { Customer } from "../models/customer";
import * as dashboardController from "../controllers/dashboardController";

const router = express.Router();

router.get('/customers', dashboardController.getAllCustomers);
router.get('/customers/:id', dashboardController.getCustomerById);
router.post('/customers', dashboardController.createCustomer);
router.put('/customers/:id', dashboardController.updateCustomer);
router.delete('/customers/:id', dashboardController.deleteCustomer);

export {router as dashboardRoutes} ;

