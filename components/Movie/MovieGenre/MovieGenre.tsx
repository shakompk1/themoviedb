import React from "react";
import { STChip } from "./styled";
import { IProps } from "./type";

const MovieGenre: React.FC<IProps> = ({ genre: { item, index, status } }) => {
    if (index > 1 && status) {
        return null;
    } else {
        return (
            <STChip
                label={item.name}
                component="a"
                href="#chip"
                clickable
                variant="outlined"
            />
        );
    }
};

export default MovieGenre;
