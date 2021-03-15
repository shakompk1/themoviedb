export interface TPPagination {
    totalPage: number;
    changePage: (number: number) => void;
    takeMovieList: () => void;
}
