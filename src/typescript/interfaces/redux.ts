//initialState / reducer.tsx
export interface InitialState {
    status: string;
    totalPage: number;
    currentPage: number;
    movieList: Array<MovieList>;
    movieGenere?: GenreList | {};
}

export interface MovieList {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    genre_name?: Array<string>;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface GenreList {
    genres?: Array<Genre>;
}
