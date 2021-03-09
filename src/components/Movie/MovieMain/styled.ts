import { makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            flexGrow: 1,
            padding: theme.spacing(2),
        },
        poster: {
            height: "85vh",
            textAlign: "center",
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        direction: {
            margin: theme.spacing(2),
            padding: theme.spacing(1),
        },
        overview: {
            margin: theme.spacing(2),
            textAlign: "center",
            padding: theme.spacing(5),
            color: theme.palette.text.secondary,
        },
    };
});

export const Poster = styled.img`
    width: 100%;
    height: 100%;
`;

export default useStyles;
