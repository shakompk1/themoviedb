import {
    all,
    call,
    delay,
    put,
    take,
    takeLatest,
    takeEvery,
    select,
} from "redux-saga/effects";
import { ActionTypes } from "./actionTypes";
import {
    getGenreRequest,
    setSingleMovie,
    getMovieListRequest,
} from "./movie/sagas";
import { searchMovieListRequest } from "./search/sagas";

function* rootSaga() {
    yield all([
        takeEvery(ActionTypes.GET_MOVIES_REQUEST, getMovieListRequest),
        takeEvery(ActionTypes.GET_GENRE_REQUEST, getGenreRequest),
        takeEvery(ActionTypes.GET_SINGLE_MOVIE, setSingleMovie),
        takeLatest(ActionTypes.GET_MOVIE_NAME, searchMovieListRequest),
    ]);
}
export default rootSaga;
