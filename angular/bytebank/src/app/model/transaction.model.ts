export interface Transaction {
  id?: string;
  valor: number;
  destino: string | number;
  data?: string;
}
