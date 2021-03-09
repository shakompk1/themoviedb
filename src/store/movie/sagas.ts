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
import {
    putMovieList,
    putMovieGenere,
    putTotalPage,
    putSingleMovie,
} from "./actions";
import { getCorrentPage } from "./selectors";
import { getDataFromApi } from "src/fetch/";
import { MOVIE } from "src/api";
import * as url from "src/url.json";

export function* getMovieListRequest(): Object {
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

export function* setSingleMovie(data): Object {
    try {
        const movies = yield call(getDataFromApi, `${MOVIE}${data.payload}`);
        yield put(putSingleMovie(movies));
    } catch (err) {
        throw err;
    }
}

export function* getGenreRequest(): Object {
    try {
        const genere = yield call(getDataFromApi, url.genreList, {
            language: "en-US",
        });
        yield put(putMovieGenere(genere));
    } catch (err) {
        throw err;
    }
}
