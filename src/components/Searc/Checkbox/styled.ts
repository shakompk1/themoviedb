import { makeStyles, Theme } from "@material-ui/core/styles";
import { LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor: LineColor,
            padding: theme.spacing(1),
        },
        label: {
            textAlign: "center",
        },
    };
});

export default useStyles;
