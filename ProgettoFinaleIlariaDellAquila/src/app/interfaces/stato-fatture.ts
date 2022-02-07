import { StatoFattura } from "../classes/stato-fattura";

export interface StatoFatture {
    content: Array<StatoFattura>,
    pageable: Object,
    last: Boolean,
    totalPages: number,
    totalElements: number,
    number: number,
    numberOfElements: number,
    size: number,
    sort: Object,
    first: Boolean,
    empty: Boolean
}
