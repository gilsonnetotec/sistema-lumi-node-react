import Axios from "axios";
import { CustomerApiResponse } from "../model/dashboard-model";

async function fetchDashboardCustomers(): Promise<CustomerApiResponse[]> {
    try {
      const response = await Axios.get<CustomerApiResponse[]>("http://localhost:3000/api/dashboard/customers");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os clientes:", error);
      return [];
    }
}

export default fetchDashboardCustomers;


