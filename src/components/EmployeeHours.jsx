import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function EmployeeHours(props) {
  const classes = useStyles();
  const { employees, deleteWT } = props;

  return (
    <React.Fragment>
      <h1 style={{ marginTop: 40 }}>Working Times</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Arrive</TableCell>
              <TableCell align="center">Exit</TableCell>
              <TableCell align="center">Lunch Start</TableCell>
              <TableCell align="center">Lunch End</TableCell>
              <TableCell align="center">Worked Hours</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell component="th" scope="row">
                  {employee.employeeID}
                </TableCell>
                <TableCell align="center">
                  {employee.firstName + " " + employee.lastName}
                </TableCell>
                <TableCell align="center">{employee.date}</TableCell>
                <TableCell align="center">{employee.arrive}</TableCell>
                <TableCell align="center">{employee.exit}</TableCell>
                <TableCell align="center">{employee.lunchStart}</TableCell>
                <TableCell align="center">{employee.lunchEnd}</TableCell>
                <TableCell align="center">{employee.workedHours}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => deleteWT(employee.id)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
