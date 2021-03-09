import { connect } from "react-redux";
import MovieDescription from "./MovieDescription";
import { InitialState } from "src/typescript/movieRedux";
import { getSingleMovieFromReducer } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    movie: getSingleMovieFromReducer(state),
});

export default connect(mapStateToProps)(MovieDescription);
