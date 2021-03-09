import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MovieDescription from "../MovieDescription/";
import { MOVIE_POSTER } from "src/api";
import useStyles, * as Styled from "./styled";
import { IProps } from "./type";

const MovieMain: React.FC<IProps> = ({ poster_path, overview }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justify="center"
            className={classes.root}
            spacing={2}
        >
            <Grid item xs={4}>
                <Paper className={classes.poster}>
                    <Styled.Poster src={`${MOVIE_POSTER}${poster_path}`} />
                </Paper>
            </Grid>
            <Grid item xs={5}>
                <Paper className={classes.direction}>
                    <MovieDescription />
                </Paper>
                <Paper className={classes.overview}>
                    <Typography variant="body1" gutterBottom>
                        {overview}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default MovieMain;
