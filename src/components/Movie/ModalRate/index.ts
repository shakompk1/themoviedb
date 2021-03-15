import { connect } from "react-redux";
import { Dispatch } from "redux";
import ModalRate from "./ModalRate";
import { selectRateFromReducer } from "src/store/movie/selectors";
import { selectSpinerFromReducer } from "src/store/search/selectors";
import { InitialState } from "src/typescript/movieRedux";
import { takeMovieRate, takeMovieDelete } from "src/store/movie/actions";

const mapStateToProps = (state: InitialState) => ({
    rateStatus: selectRateFromReducer(state),
    spinner: selectSpinerFromReducer(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendRate: (rate: number) => dispatch(takeMovieRate(rate)),
    deleteRate: () => dispatch(takeMovieDelete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalRate);
