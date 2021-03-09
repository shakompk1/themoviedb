import { connect } from "react-redux";
import { Dispatch } from "redux";
import Pagination from "./Pagination";
import { InitialState } from "src/typescript/movieRedux";
import { getTotalPage } from "src/store/movie/selectors";
import { getStatusFromReducer } from "src/store/search/selectors";
import { takeMovieName } from "src/store/search/actions";
import { changePage, takeMovieList } from "src/store/movie/actions";

const mapStateToProps = (state: InitialState) => ({
    totalPage: getTotalPage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePage: (page) => dispatch(changePage(page)),
    takeMovieList: () => dispatch(takeMovieList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
