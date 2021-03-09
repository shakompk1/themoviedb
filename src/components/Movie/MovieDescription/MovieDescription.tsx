import React from "react";
import { useTranslation } from "react-i18next";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styled";
import MovieRow from "../MovieRow/";
import MovieRowGenre from "../MovieRowGenry/";
import { Movie } from "src/typescript/movieRedux";

export interface IMovie {
    movie: Movie;
}

const MovieDescription: React.FC<IMovie> = ({
    movie: {
        budget,
        homepage,
        production_companies,
        production_countries,
        spoken_languages,
        genres,
        revenue,
        status,
        runtime,
    },
}) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <TableContainer>
            <TableContainer
                className={classes.table}
                aria-label="caption table"
            >
                <TableBody className={classes.tableBody} component={Paper}>
                    <MovieRow name="budget" info={budget} array />
                    <a href={homepage}>
                        <MovieRow name="homepage" info={homepage} array />
                    </a>
                    <MovieRow
                        name="companies"
                        info={production_companies}
                        array={false}
                    />
                    <MovieRow
                        name="countries"
                        info={production_countries}
                        array={false}
                    />
                    <MovieRow
                        name="languages"
                        info={spoken_languages}
                        array={false}
                    />
                    <MovieRow name="revenue" info={revenue} array />
                    <MovieRow name="status" info={status} array />
                    <MovieRow name="runtime" info={runtime} array />
                    <MovieRowGenre name="genres" info={genres} />
                </TableBody>
            </TableContainer>
        </TableContainer>
    );
};

export default MovieDescription;
