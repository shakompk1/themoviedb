import React from "react";
import { useTranslation } from "react-i18next";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import MovieGenre from "src/components/Movies/MovieGenre";
import useStyles from "../MovieRow/styled";

interface IProps {
    name: string;
    info: Array<{ id: number; name: string }>;
}
const MovieRowGenre: React.FC<IProps> = ({ name, info }) => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <TableRow className={classes.tableRow} key={1}>
            <TableCell className={classes.tableCell} component="th" scope="row">
                {t(`${name}`)}
            </TableCell>
            <TableCell className={classes.tableRow} align="right">
                {info?.map((item, index) => (
                    <MovieGenre
                        key={item.id}
                        item={item}
                        index={index}
                        status={false}
                    />
                ))}
            </TableCell>
        </TableRow>
    );
};

export default MovieRowGenre;
