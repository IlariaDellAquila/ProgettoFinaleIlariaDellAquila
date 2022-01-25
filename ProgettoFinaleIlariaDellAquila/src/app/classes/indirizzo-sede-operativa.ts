import { Comune } from "./comune";

export class IndirizzoSedeOperativa {
    id?: number;
    via!: string;
    civico!:string;
    cap!: string;
    localita!: string;
    comune!: Comune;
}
