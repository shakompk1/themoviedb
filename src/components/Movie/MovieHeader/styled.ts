import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            padding: theme.spacing(2),
            height: "5vh",
        },
        paper: {
            textAlign: "center",
            padding: theme.spacing(1),
            color: theme.palette.text.secondary,
        },
        button: {
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
        },
    };
});

export default useStyles;
