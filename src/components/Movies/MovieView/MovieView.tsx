import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MovieGenre from "../MovieGenre";
import * as Styled from "./styled";
import { TPMovieView, Genre } from "./type";

const MovieView: React.FC<TPMovieView> = ({
    vote_average,
    overview,
    title,
    vote_count,
    genre_name,
}) => {
    const { t } = useTranslation();
    const [isShown, setIsShown] = useState<boolean>(false);
    const voteRate = vote_average;
    const voteAverage = vote_count;

    const onHandle = () => {
        setIsShown((prevState) => !prevState);
    };

    return (
        <>
            <Styled.STPaper>
                {t("rate")}: {voteRate}/{voteAverage}
            </Styled.STPaper>
            <Styled.STVisibilityIcon onMouseEnter={onHandle} />
            {isShown && (
                <Styled.STCard onMouseLeave={onHandle}>
                    <Styled.STMovieTitle variant="h4" component="h3">
                        {title}
                    </Styled.STMovieTitle>
                    <Styled.STBlockTitle variant="h5" component="h4">
                        {t("rate")}: {voteRate} / {voteAverage}
                    </Styled.STBlockTitle>
                    <Styled.STBlockTitle variant="h5" component="h4">
                        {t("description")}
                    </Styled.STBlockTitle>
                    <Styled.STDescription>{overview}</Styled.STDescription>
                    <Styled.STBlockTitle variant="h5" component="h4">
                        {t("genre")}
                    </Styled.STBlockTitle>
                    {genre_name.map((item: Genre, index: number) => {
                        return (
                            <MovieGenre
                                key={item.id}
                                item={item}
                                index={index}
                                status={false}
                            />
                        );
                    })}
                </Styled.STCard>
            )}
        </>
    );
};

export default MovieView;
