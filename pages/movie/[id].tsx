import { END } from "redux-saga";
import { GetServerSideProps } from "next";
import { wrapper } from "src/store/";
import { takeSingleMovie } from "src/store/movie/actions";
import MoviePage from "src/components/Movie/MoviePage";

const Movie = () => <MoviePage />;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    async ({ store, params }: any) => {
        //честно не нашел что можно место any поставить
        await store.dispatch(takeSingleMovie(params.id));
        store.dispatch(END);
        await (store as any).sagaTask.toPromise();
    }
);

export default Movie;
