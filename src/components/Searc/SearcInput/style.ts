import { makeStyles } from "@material-ui/core/styles";
import { LineColor } from "src/color";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 10,
        overflow: "hidden",
    },
    label: {
        width: "100%",
        backgroundColor: LineColor,
        textAlign: "left",
        padding: theme.spacing(0, 1),
    },
    input: {
        width: "100%",
        backgroundColor: LineColor,
    },
}));

export default useStyles;
