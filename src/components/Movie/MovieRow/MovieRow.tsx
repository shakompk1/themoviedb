import { useTranslation } from "react-i18next";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import useStyles from "./styled";
import { IProps } from "./type";

const MovieRow: React.FC<IProps> = ({ name, info, array }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <TableRow className={classes.tableRow} key={1}>
            <TableCell className={classes.tableCell} component="th" scope="row">
                {t(`${name}`)}
            </TableCell>
            {!array ? (
                <TableCell className={classes.tableRow} align="right">
                    {info?.map((item) => item.name).join(",")}
                </TableCell>
            ) : (
                <TableCell className={classes.tableRow} align="right">
                    {info?.toLocaleString()}
                </TableCell>
            )}
        </TableRow>
    );
};

export default MovieRow;
