import { DataTypes, Model } from 'sequelize';
import {db} from '../database';

interface CustomerAttributes {
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

class Customer extends Model<CustomerAttributes> implements CustomerAttributes {
  public numero_customer!: number;
  public mesReferencia!: string;
  public dataVencimento!: Date;
  public energiaEletrica_kWh!: number;
  public energiaEletrica_precoUnit!: number;
  public energiaEletrica_valor!: number;
  public energiaInjetadaHFP_kWh!: number;
  public energiaInjetadaHFP_precoUnit!: number;
  public energiaInjetadaHFP_valor!: number;
  public enCompSemICMS_kWh!: number;
  public enCompSemICMS_precoUnit!: number;
  public enCompSemICMS_valor!: number;
  public contribIlumPublicaMunicipal!: number;
  public valorTotal!: number;
}

Customer.init(
  {
    numero_customer: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mesReferencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dataVencimento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    energiaEletrica_kWh: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaEletrica_precoUnit: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaEletrica_valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaInjetadaHFP_kWh: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaInjetadaHFP_precoUnit: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaInjetadaHFP_valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    enCompSemICMS_kWh: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    enCompSemICMS_precoUnit: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    enCompSemICMS_valor: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    contribIlumPublicaMunicipal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    valorTotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'Customer',
    tableName: 'tb_customers'
  }
);

export { Customer, CustomerAttributes };
