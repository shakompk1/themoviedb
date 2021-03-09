import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes } from "../actionTypes";
import { InitialState } from "src/typescript/searchRedux";

const initialState: InitialState = {
    status: "",
};

export const searchReducer = (
    state: Object = initialState,
    action: any
): Object => {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.search };
        }
        case ActionTypes.PUT_MOVIE_NAME:
            return { ...state, status: action.payload };
        default:
            return state;
    }
};
