import { connect } from "react-redux";
import MovieList from "./MovieList";
import { InitialState } from "src/typescript/interfaces/redux";
import { selectGenreSuper, getMovieWithGenre } from "src/store/selectors";

const mapStateToProps = (state: InitialState) => ({
    movies: getMovieWithGenre(state),
    genre: selectGenreSuper(state),
});

export default connect(mapStateToProps)(MovieList);
