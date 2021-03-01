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
import { putMovieList, putMovieGenere, putTotalPage } from "../actions";
import { ActionTypes } from "../actionTypes";
import { getCorrentPage } from "../selectors";
import { getDataFromApi } from "src/fetch/";
import * as url from "src/url.json";

function* getMovieListRequest(): Object {
    const items = yield select(getCorrentPage);
    try {
        const movies = yield call(getDataFromApi, url.moviePopular, {
            language: "en-US",
            page: items,
        });
        yield put(putMovieList(movies));
        yield put(putTotalPage(movies));
    } catch (err) {
        throw err;
    }
}

function* getGenreRequest(): Object {
    try {
        const genere = yield call(getDataFromApi, url.genreList, {
            language: "en-US",
        });
        yield put(putMovieGenere(genere));
    } catch (err) {
        throw err;
    }
}

function* rootSaga() {
    yield all([
        takeEvery(ActionTypes.GET_MOVIES_REQUEST, getMovieListRequest),
        takeEvery(ActionTypes.GET_GENRE_REQUEST, getGenreRequest),
    ]);
}

export default rootSaga;
