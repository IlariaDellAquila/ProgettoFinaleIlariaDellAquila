import { Provincia } from "../classes/provincia";

export interface Province {
    content: Array<Provincia>,
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
