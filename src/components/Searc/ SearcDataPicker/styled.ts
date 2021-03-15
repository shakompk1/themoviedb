import { makeStyles, Theme } from "@material-ui/core/styles";
import { InputColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            borderRadius: 10,
            overflow: "hidden",
        },
        label: {
            backgroundColor: InputColor,
            textAlign: "center",
            padding: theme.spacing(1),
        },
        data: {
            backgroundColor: InputColor,
            padding: theme.spacing(0, 1),
            "& input": {
                textAlign: "center",
            },
        },
    };
});

export default useStyles;
