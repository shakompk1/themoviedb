import React from "react";
import { useTranslation } from "react-i18next";
import MovieView from "../MovieView/";
import MovieGenre from "../MovieGenre/";
import * as Styled from "./styled";
import { TPMovie, Genre } from "./type";
import { MOVIE_POSTER } from "src/api";

const MovieCard: React.FC<TPMovie> = ({
    adult,
    backdrop_path,
    genre_ids,
    genre_name,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
}) => {
    const { t } = useTranslation();
    return (
        <Styled.STCard>
            <Styled.STCardMedia
                image={`${MOVIE_POSTER}${poster_path}`}
                title={original_title}
            >
                <MovieView
                    {...{
                        vote_average,
                        vote_count,
                        title,
                        overview,
                        genre_name,
                    }}
                />
            </Styled.STCardMedia>
            <Styled.STTitle gutterBottom variant="h5" component="h2">
                {title}
            </Styled.STTitle>
            <Styled.STGrid container spacing={3}>
                <Styled.STGrid item xs={8}>
                    <Styled.STPaper>
                        {genre_name.map((item, index: number) => {
                            return (
                                <MovieGenre
                                    key={item.id}
                                    {...{ item, index, status: true }}
                                />
                            );
                        })}
                    </Styled.STPaper>
                </Styled.STGrid>
                <Styled.STGrid item xs={4}>
                    <Styled.STPaper>{release_date}</Styled.STPaper>
                </Styled.STGrid>
            </Styled.STGrid>
        </Styled.STCard>
    );
};

export default MovieCard;
