import { makeStyles } from "@material-ui/core/styles";
import { InputColor } from "src/color";

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 10,
        overflow: "hidden",
    },
    label: {
        width: "100%",
        backgroundColor: InputColor,
        textAlign: "center",
        padding: theme.spacing(1),
    },
    input: {
        width: "100%",
        backgroundColor: InputColor,
    },
}));

export default useStyles;
