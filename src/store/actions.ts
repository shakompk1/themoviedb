import { ActionTypes } from "./actionTypes";
import { action } from "typesafe-actions";
import { MovieList } from "src/typescript/interfaces/redux";

export const takeMovieList = () => action(ActionTypes.GET_MOVIES_REQUEST);
export const takeMovieGenere = () => action(ActionTypes.GET_GENRE_REQUEST);

export const putMovieList = (payload: Array<MovieList>) =>
    action(ActionTypes.PUT_MOVIE_LIST, payload);

export const putMovieGenere = (payload: number) =>
    action(ActionTypes.PUT_MOVIE_GENRE, payload);

export const changeStatus = (payload: string) =>
    action(ActionTypes.STATUS, payload);

export const putTotalPage = (payload: number) =>
    action(ActionTypes.PUT_TOTAL_PAGES, payload);

export const putCurrentPage = (payload: number) =>
    action(ActionTypes.PUT_CURRENT_PAGE, payload);
    
