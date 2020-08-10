import React from "react";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

export default function BasicInfo(props) {
  const { data, setData } = props;

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <h1>Basic Information</h1>
      <form style={{ marginTop: 40 }} noValidate autoComplete="off">
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Employee ID"
              variant="outlined"
              onChange={handleInputChange}
              name="employeeID"
              value={data.employeeID}
              inputProps={{ maxLength: 8 }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="First Name"
              variant="outlined"
              onChange={handleInputChange}
              name="firstName"
              value={data.firstName}
              inputProps={{ maxLength: 18 }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Last Name"
              variant="outlined"
              onChange={handleInputChange}
              name="lastName"
              value={data.lastName}
              inputProps={{ maxLength: 18 }}
            />
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
