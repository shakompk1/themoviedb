import { END } from "redux-saga";
import { wrapper } from "src/store/";
import MovieList from "../components/Movie/MovieList/";
import { takeMovieList, takeMovieGenere } from "src/store/actions";
import { selectGenreSuper } from "src/store/selectors";
import { GetServerSideProps } from "next";

const Index = () => {
    return <MovieList />;
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        store.dispatch(takeMovieList());
        if (!selectGenreSuper(store)) {
            store.dispatch(takeMovieGenere());
        }
        store.dispatch(END);
        await (store as any).sagaTask.toPromise();
    }
);

export default Index;
