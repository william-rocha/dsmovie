import { Movie } from "./movie";

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}