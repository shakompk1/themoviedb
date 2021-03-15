import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { IPostRate } from "./type";
import useStyles from "./styled";
import { ONLY_NUMBERS } from "src/reqular/";

const ModalRate: React.FC<IPostRate> = ({ sendRate }) => {
    const { t } = useTranslation();
    const [rate, setRate] = useState<number>(0);
    const classes = useStyles();
    const shrink = { shrink: true };
    const hadleClickSend = () => sendRate(rate);

    const hadnleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (ONLY_NUMBERS.test(event.target.value)) {
            setRate(+event.target.value);
        }
    };

    return (
        <div className={classes.paper}>
            <h1 className={classes.title} id="simple-modal-title">
                {t("rate")}
            </h1>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <TextField
                    id="outlined-number"
                    type="number"
                    value={rate}
                    className={classes.label}
                    onChange={hadnleChange}
                    InputLabelProps={shrink}
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                >
                    {t("delete")}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={hadleClickSend}
                >
                    {t("send")}
                </Button>
            </Grid>
        </div>
    );
};

export default ModalRate;
