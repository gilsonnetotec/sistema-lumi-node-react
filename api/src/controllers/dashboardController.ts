import { Request, Response } from 'express';
import { Customer } from '../models/customer';
import CustomerService from '../services/customerService';

export async function getAllCustomers(req: Request, res: Response) {
    const customers = await CustomerService.getAllCustomers();
    res.json(customers);
  }
  
  export async function getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    const customer = await CustomerService.getCustomerById(Number(id));
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  }
  
  export async function createCustomer(req: Request, res: Response) {
    const customerData = req.body;
    const createdCustomer = await CustomerService.createCustomer(customerData);
    res.json(createdCustomer);
  }
  
  export async function updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const customerData = req.body;
    const updatedCustomer = await CustomerService.updateCustomer(Number(id), customerData);
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  }
  
  export async function deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const deleted = await CustomerService.deleteCustomer(Number(id));
    if (deleted) {
      res.json({ message: 'Cliente excluído com sucesso.' });
    } else {
      res.status(404).json({ message: 'Cliente não encontrado.' });
    }
  }