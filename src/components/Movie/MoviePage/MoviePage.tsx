import React from "react";
import { Grid } from "@material-ui/core";
import MovieHeader from "../MovieHeader/";
import MovieMain from "../MovieMain/";
import { TSMovie } from "./type";

const MoviePage: React.FC<TSMovie> = ({ movie }) => (
    <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
    >
        <MovieHeader />
        <MovieMain {...movie} />
    </Grid>
);
export default MoviePage;
