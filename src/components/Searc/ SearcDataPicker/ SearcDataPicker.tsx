import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";

export function SearchDataPicker() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | number>(
        new Date("2014-08-18T21:11:54")
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date.getTime());
    };

    console.log(selectedDate);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date",
                }}
            />
        </MuiPickersUtilsProvider>
    );
}

export default SearchDataPicker;
