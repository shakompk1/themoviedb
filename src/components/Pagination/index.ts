import { connect } from "react-redux";
import { Dispatch } from "redux";
import PaginationBlock from "./Pagination";
import { InitialState } from "src/typescript/movieRedux";
import { getTotalPage } from "src/store/movie/selectors";
import { changePage, takeMovieList } from "src/store/movie/actions";

const mapStateToProps = (state: InitialState) => ({
    totalPage: getTotalPage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePage: (page) => dispatch(changePage(page)),
    takeMovieList: () => dispatch(takeMovieList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBlock);
