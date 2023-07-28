import React, { useEffect, useState } from "react";
import fetchDashboardCustomers from "../../adapters/dashboard-adapters";
import { CustomerApiResponse, CustomerProps } from "../../model/dashboard-model";
import adaptCustomerData from "../../model/dashboard-model";

const DashboardComponent: React.FC = () => {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);

  useEffect(() => {
    // Função para buscar os dados dos clientes da API
    const fetchData = async () => {
      try {
        const data: CustomerApiResponse[] = await fetchDashboardCustomers();
        const adaptedData: CustomerProps[] = data.map((customerData) => adaptCustomerData(customerData));
        setCustomers(adaptedData);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar os clientes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Clientes do Dashboard</h2>
      {customers.map((customer) => (
        <div key={customer.id}>
          <p>ID: {customer.id}</p>
          <p>Número do Cliente: {customer.numeroCustomer}</p>
          {/* Outras propriedades do cliente */}
        </div>
      ))}
    </div>
  );
};

export default DashboardComponent;