import { createSelector } from "reselect";
import { InitialState } from "src/typescript/searchRedux";

export const getSearchStateFromReducer = (state): InitialState => state.search;

export const getStatusFromReducer = createSelector(
    getSearchStateFromReducer,
    (search): string => search?.status
);
