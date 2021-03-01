import { ActionTypes } from "src/store/actionTypes";

export function changePage(page) {
    return {
      type: ActionTypes.PUT_CURRENT_PAGE,
      payload:page
    }
  }

  export function takeMovieList() {
    return {
      type: ActionTypes.GET_MOVIES_REQUEST,
    }
  }