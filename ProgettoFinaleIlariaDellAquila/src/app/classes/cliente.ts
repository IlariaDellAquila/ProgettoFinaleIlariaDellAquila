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
    indirizzoSedeOperativa!: Object;
    indirizzoSedeLegale!:Object;
    dataInserimento!: string;
    dataUltimoContatto!: string;
    fatturatoAnnuale!: number;
}