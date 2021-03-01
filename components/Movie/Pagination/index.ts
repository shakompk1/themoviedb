import { connect } from "react-redux";
import { Dispatch } from "redux";
import Pagination from "./Pagination";
import { InitialState } from "src/typescript/interfaces/redux";
import { getTotalPage } from "src/store/selectors";
import { changePage, takeMovieList } from "./action";

const mapStateToProps = (state: InitialState) => ({
    totalPage: getTotalPage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePage: (page) =>
        dispatch(changePage(page)),
    takeMovieList: () => dispatch(takeMovieList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
