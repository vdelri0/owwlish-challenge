import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

export default function ArriveExitHours(props) {
  const { handleHours, hours, setHours } = props;

  const handleArriveChange = (date) => {
    setHours({
      ...hours,
      arriveHour: date,
    });
    handleHours(date, undefined, undefined, undefined);
  };

  const handleExitChange = (date) => {
    setHours({
      ...hours,
      exitHour: date,
    });
    handleHours(undefined, date, undefined, undefined);
  };

  return (
    <React.Fragment>
      <h1>Arriving and Exiting Hours</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardTimePicker
            margin="normal"
            id="time-picker-ae1"
            label="Arriving Hours"
            value={hours.arriveHour}
            onChange={handleArriveChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker-ae2"
            label="Exiting Hours"
            value={hours.exitHour}
            onChange={handleExitChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
