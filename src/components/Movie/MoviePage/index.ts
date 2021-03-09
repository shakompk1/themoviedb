import { connect } from "react-redux";
import MoviePage from "./MoviePage";
import { InitialState } from "src/typescript/redux";
import { getSingleMovieFromReducer } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    movie: getSingleMovieFromReducer(state),
});

export default connect(mapStateToProps)(MoviePage);
