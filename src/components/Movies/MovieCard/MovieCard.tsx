import Link from "next/link";
import React from "react";
import MovieView from "../MovieView";
import MovieGenre from "../MovieGenre";
import * as Styled from "./styled";
import { TPMovie, Genre } from "./type";
import { POSTER, MOVIE } from "src/api";

const MovieCard: React.FC<TPMovie> = ({
    genre_name,
    id,
    original_title,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
}) => (
    <Styled.STCard>
        <Styled.STCardMedia
            image={`${POSTER}${poster_path}`}
            title={original_title}
        >
            <MovieView
                vote_average={vote_average}
                overview={overview}
                title={title}
                vote_count={vote_count}
                genre_name={genre_name}
            />
        </Styled.STCardMedia>
        <Styled.STTitle gutterBottom variant="h5" component="h2">
            <Link href={`${MOVIE}[id]`} as={`${MOVIE}${id}`}>
                <a>{title}</a>
            </Link>
        </Styled.STTitle>
        <Styled.STGrid container spacing={3}>
            <Styled.STGrid justify="center" item xs={8}>
                <Styled.STPaper>
                    {genre_name.map((item: Genre, index: number) => (
                        <MovieGenre
                            key={item.id}
                            item={item}
                            index={index}
                            status={true}
                        />
                    ))}
                </Styled.STPaper>
            </Styled.STGrid>
            <Styled.STGrid item xs={4}>
                <Styled.STPaper>{release_date}</Styled.STPaper>
            </Styled.STGrid>
        </Styled.STGrid>
    </Styled.STCard>
);

export default MovieCard;
