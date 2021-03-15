import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import useStyles from "./styled";
import { TPPagination } from "./type";

const PaginationBloc: React.FC<TPPagination> = ({
    totalPage,
    changePage,
    takeMovieList,
}) => {
    const classes = useStyles();
    const handleChange = (_event, value: number) => {
        changePage(value);
        takeMovieList();
    };
    return (
        <Pagination
            count={totalPage}
            color="secondary"
            onChange={handleChange}
            className={classes.root}
        />
    );
};

export default PaginationBloc;
