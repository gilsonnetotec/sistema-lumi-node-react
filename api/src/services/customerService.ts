import { Customer, CustomerAttributes } from '../models/customer';

class CustomerService {
  async getAllCustomers(): Promise<CustomerAttributes[]> {
    return Customer.findAll();
  }

  async getCustomerById(id: number): Promise<CustomerAttributes | null> {
    return Customer.findByPk(id);
  }

  async createCustomer(data: CustomerAttributes): Promise<CustomerAttributes> {
    return Customer.create(data);
  }

  async updateCustomer(id: number, data: CustomerAttributes): Promise<CustomerAttributes | null> {
    const customer = await Customer.findByPk(id);
    if (customer) {
      await customer.update(data);
      return customer;
    }
    return null;
  }

  async deleteCustomer(id: number): Promise<boolean> {
    const customer = await Customer.findByPk(id);
    if (customer) {
      await customer.destroy();
      return true;
    }
    return false;
  }
}

export default new CustomerService();