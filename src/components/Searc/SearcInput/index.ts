import SearchInput from "./SearchInput";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { InitialState } from "src/typescript/searchRedux";
import { takeMovieName, putMovieName } from "src/store/search/actions";
import { takeMovieList } from "src/store/movie/actions";

const mapStateToProps = (state: InitialState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    putMovieName: (name) => dispatch(putMovieName(name)),
    takeMovieName: () => dispatch(takeMovieName()),
    takeMovie: () => dispatch(takeMovieList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
