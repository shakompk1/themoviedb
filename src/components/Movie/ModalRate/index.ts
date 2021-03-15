import { connect } from "react-redux";
import { Dispatch } from "redux";
import ModalRate from "./ModalRate";
import { takeMovieRate } from "src/store/movie/actions";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    sendRate: (rate: number) => dispatch(takeMovieRate(rate)),
});

export default connect(null, mapDispatchToProps)(ModalRate);
