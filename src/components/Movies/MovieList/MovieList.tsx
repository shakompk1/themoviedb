import React from "react";
import MainLayout from "src/components/MainLayout/MainLayout";
import MovieCard from "../MovieCard";
import STPagination from "src/components/Pagination/";
import { IProps } from "./type";
import { STMain } from "./styled";

const MovieList: React.FC<IProps> = ({ movies }) => (
    <MainLayout title="Movies">
        <STMain>
            {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </STMain>
        <STPagination />
    </MainLayout>
);

export default MovieList;
