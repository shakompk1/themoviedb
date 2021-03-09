export interface TPPagination {
    totalPage: number;
    changePage: (number) => void;
    takeMovieList: () => void;
}
