import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
        },
    },
}));

const SearchInput: React.FC<any> = ({
    putMovieName,
    takeMovieName,
    takeMovie,
}) => {
    const [name, setName] = useState("");
    const classes = useStyles();

    const onHandleChange = (event) => {
        putMovieName(event.target.value);
        if (event.target.value) {
            takeMovieName(event.target.value);
        } else {
            takeMovie();
        }
    };
    return (
        <div>
            <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
                onChange={onHandleChange}
            />
        </div>
    );
};

export default SearchInput;
