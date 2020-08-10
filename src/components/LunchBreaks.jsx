import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

export default function LunchBreaks(props) {
  const { handleHours, hours, setHours, titleStyle } = props;

  const handleStartChange = (date) => {
    setHours({
      ...hours,
      lunchStart: date,
    });
    handleHours(undefined, undefined, date, undefined);
  };

  const handleEndChange = (date) => {
    setHours({
      ...hours,
      lunchEnd: date,
    });
    handleHours(undefined, undefined, undefined, date);
  };

  return (
    <React.Fragment>
      <h1 style={titleStyle}>Lunch Breaks</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker-l1"
            label="Lunch Start"
            value={hours.lunchStart}
            onChange={handleStartChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker-l2"
            label="Lunch End"
            value={hours.lunchEnd}
            onChange={handleEndChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
