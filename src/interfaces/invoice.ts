export interface Invoice {
  id: number;
  data: string;
  numero: number;
  anno: string;
  importo: number;
  stato: {
    id: number;
    nome: string;
  };
  cliente: any
}
