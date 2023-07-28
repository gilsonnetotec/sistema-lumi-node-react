export interface CustomerProps {
    id: number;
    numeroCustomer: number;
    mesReferencia: string;
    dataVencimento: Date;
    energiaEletrica: {
      kWh: number;
      precoUnit: number;
      valor: number;
    };
    energiaInjetadaHFP: {
      kWh: number;
      precoUnit: number;
      valor: number;
    };
    enCompSemICMS: {
      kWh: number;
      precoUnit: number;
      valor: number;
    };
    contribIlumPublicaMunicipal: number;
    valorTotal: number;
}

export interface CustomerApiResponse {
    id: number;
    numero_customer: number;
    mesReferencia: string;
    dataVencimento: Date;
    energiaEletrica_kWh: number;
    energiaEletrica_precoUnit: number;
    energiaEletrica_valor: number;
    energiaInjetadaHFP_kWh: number;
    energiaInjetadaHFP_precoUnit: number;
    energiaInjetadaHFP_valor: number;
    enCompSemICMS_kWh: number;
    enCompSemICMS_precoUnit: number;
    enCompSemICMS_valor: number;
    contribIlumPublicaMunicipal: number;
    valorTotal: number;
}

function adaptCustomerData(apiData: CustomerApiResponse): CustomerProps {
    return {
      id: apiData.id,
      numeroCustomer: apiData.numero_customer,
      mesReferencia: apiData.mesReferencia,
      dataVencimento: apiData.dataVencimento,
      energiaEletrica: {
        kWh: apiData.energiaEletrica_kWh,
        precoUnit: apiData.energiaEletrica_precoUnit,
        valor: apiData.energiaEletrica_valor,
      },
      energiaInjetadaHFP: {
        kWh: apiData.energiaInjetadaHFP_kWh,
        precoUnit: apiData.energiaInjetadaHFP_precoUnit,
        valor: apiData.energiaInjetadaHFP_valor,
      },
      enCompSemICMS: {
        kWh: apiData.enCompSemICMS_kWh,
        precoUnit: apiData.enCompSemICMS_precoUnit,
        valor: apiData.enCompSemICMS_valor,
      },
      contribIlumPublicaMunicipal: apiData.contribIlumPublicaMunicipal,
      valorTotal: apiData.valorTotal,
    };
  }
  
  export default adaptCustomerData;