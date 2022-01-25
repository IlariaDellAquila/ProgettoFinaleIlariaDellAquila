import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";
import { IndirizzoSedeOperativa } from "./indirizzo-sede-operativa";

export class Cliente{
    id!: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa!: IndirizzoSedeOperativa;
    indirizzoSedeLegale!:IndirizzoSedeLegale;
    dataInserimento!: string;
    dataUltimoContatto!: string;
    fatturatoAnnuale!: number;
}