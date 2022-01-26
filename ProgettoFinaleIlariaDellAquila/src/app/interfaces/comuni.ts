import { Comune } from "../classes/comune";

export interface Comuni {
    content: Array<Comune>,
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
