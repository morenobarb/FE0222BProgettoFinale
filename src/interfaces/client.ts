import { Comune } from "./comune";
export class Client {
  email!: string;
    partitaIva!: string;
    ragioneSociale!: string;
    tipoCliente!: string;
    pec!: string;
    telefono!: number;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa!: {
        via: string;
        civico: string;
        cap: string;
        localita: string;
        comune: Comune;
    };

}

