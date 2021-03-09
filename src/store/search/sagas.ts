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
import { putMovieList, putTotalPage } from "./actions";
import { getStatusFromReducer } from "./selectors";
import { getCorrentPage } from "src/store/movie/selectors";
import { getDataFromApi } from "src/fetch/";

export function* searchMovieListRequest(): Object {
    const name = yield select(getStatusFromReducer);
    const currentPage = yield select(getCorrentPage);
    const req = {
        language: "en-US",
        query: name,
        page: currentPage,
    };
    try {
        const movies = yield call(getDataFromApi, "/search/movie", {
            ...req,
        });
        yield put(putMovieList(movies));
        yield put(putTotalPage(movies));
    } catch (err) {
        throw err;
    }
}
