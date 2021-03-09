import React from "react";
import { STPagination } from "./styled";
import { TPPagination } from "./type";

const Pagination: React.FC<TPPagination> = ({
    totalPage,
    changePage,
    takeMovieList,
}) => {
    const onHandleChange = (event, value: number) => {
        changePage(value);
        takeMovieList();
    };
    return (
        <STPagination
            count={totalPage}
            color="secondary"
            onChange={onHandleChange}
        />
    );
};

export default Pagination;
