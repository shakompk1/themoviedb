import { makeStyles, Theme } from "@material-ui/core/styles";
import { LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            borderRadius: 10,
            overflow: "hidden",
        },
        label: {
            backgroundColor: LineColor,
            textAlign: "center",
            padding: theme.spacing(1),
        },
        data: {
            backgroundColor: LineColor,
            padding: theme.spacing(0, 1),
            textAlign: "center",
        },
    };
});

export default useStyles;
