import React from "react";
import MainLayout from "components/MainLayout/MainLayout";
import MovieCard from "../MovieCard/";
import STPagination from "../Pagination/";
import { IProps } from "./type";
import { STMain } from "./styled";

const MovieList: React.FC<IProps> = ({ movies }) => (
    <MainLayout title="Movies">
        <STMain>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </STMain>
        <STPagination />
    </MainLayout>
);

export default MovieList;
