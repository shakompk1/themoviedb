import { createSelector } from "reselect";
import {
    InitialState,
    GenreList,
    Genre,
    MovieList,
    Movie,
} from "src/typescript/movieRedux";

export const getMovieStateFromReducer = (state): InitialState => state.movie;

export const getGenreStateFromReducer = createSelector(
    getMovieStateFromReducer,
    (movie): GenreList => movie?.movieGenere
);

export const getSingleMovieFromReducer = createSelector(
    getMovieStateFromReducer,
    (data): Movie | {} => data?.movie
);

export const selectMovieSuper = createSelector(
    getMovieStateFromReducer,
    (movie): Array<MovieList> => movie.movieList
);

export const selectGenreSuper = createSelector(
    getGenreStateFromReducer,
    (movie): Array<Genre> => movie?.genres
);

export const getMovieWithGenre = createSelector(
    [selectMovieSuper, selectGenreSuper],
    (movie, genre): Array<MovieList> => {
        movie.map((item) => {
            let genreNamesArr = [];
            for (let i = 0; i < item.genre_ids.length; i++) {
                for (let j = 0; j < genre.length; j++) {
                    if (item.genre_ids[i] == genre[j].id) {
                        genreNamesArr.push(genre[j]);
                    }
                }
            }
            item.genre_name = genreNamesArr;
        });
        return movie;
    }
);

export const getTotalPage = createSelector(
    getMovieStateFromReducer,
    (movie): Number => movie.totalPage
);

export const getCorrentPage = createSelector(
    getMovieStateFromReducer,
    (movie): Number => movie.currentPage
);
