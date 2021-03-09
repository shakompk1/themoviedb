import { ActionTypes } from "../actionTypes";
import { action } from "typesafe-actions";
import { putMovieList, putTotalPage } from "../movie/actions";

export const takeMovieName = () => action(ActionTypes.GET_MOVIE_NAME);

export const putMovieName = (payload: string) =>
    action(ActionTypes.PUT_MOVIE_NAME, payload);

export { putMovieList, putTotalPage };
