import { Comune } from "./comune";

export class IndirizzoSedeLegale {
    id?: number;
    via!: string;
    civico!:string;
    cap!: string;
    localita!: string;
    comune!: Comune;
}
