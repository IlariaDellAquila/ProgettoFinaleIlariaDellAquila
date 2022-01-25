import { Cliente } from "../classes/cliente";

export interface Clienti {
    content: Array<Cliente>,
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
