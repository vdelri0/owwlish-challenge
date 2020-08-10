import "date-fns";
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import LunchBreaks from "./LunchBreaks";
import WorkedHours from "./WorkedHours";
import ArriveExitHours from "./ArriveExitHours";
import { Container } from "@material-ui/core";
import AlertDialog from "./AlertDIalog";
import BasicInfo from "./BasicInfo";
import Button from "@material-ui/core/Button";
import EmployeeHours from "./EmployeeHours";
import axios from "axios";
import { arriveExitError, lunchError, saveError, saveBIError } from "../utils";
import {
  dateToTime,
  msToTime,
  validateHours,
  validateBasicInfo,
} from "../utils";
import {
  arriveExitDialogTitle,
  lunchDialogTitle,
  saveDialogTitle,
  saveBIDialogTitle,
} from "../utils";

const api = axios.create({
  baseURL: `http://localhost:3001/posts/`,
});

const mainGridsStyle = {
  textAlign: "center",
  marginTop: 40,
  marginBottom: 40,
};

const mainH1Style = {
  height: 74,
};

export default function HomePage() {
  const [hours, setHours] = useState({
    arriveHour: new Date(),
    exitHour: new Date(),
    lunchStart: new Date(),
    lunchEnd: new Date(),
  });
  const [basicInfo, setBasicInfo] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
  });

  const [workedHours, setworkedHours] = useState("00:00:00");
  const [arriveExitValidation, setArriveExitValidation] = useState(true);
  const [lunchValidation, setLunchValidation] = useState(true);
  const [arriveExitOpen, setArriveExitOpen] = useState(false);
  const [lunchOpen, setLunchOpen] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const [saveBIOpen, setSaveBIOpen] = useState(false);
  const [employees, setEmployees] = useState([]);

  const getWorkedTimes = async () => {
    let data = await api.get("/").then(({ data }) => data);
    setEmployees(data);
  };

  const createWorkedTime = async () => {
    if (validateBasicInfo(basicInfo)) {
      if (arriveExitValidation && lunchValidation) {
        const date = new Date();
        let data = await api.post("/", {
          employeeID: basicInfo.employeeID,
          firstName: basicInfo.firstName,
          lastName: basicInfo.lastName,
          date: date.toISOString().split("T")[0],
          arrive: dateToTime(hours.arriveHour),
          exit: dateToTime(hours.exitHour),
          lunchStart: dateToTime(hours.lunchStart),
          lunchEnd: dateToTime(hours.lunchEnd),
          workedHours: workedHours,
        });
        console.log(data);
        getWorkedTimes();
      } else {
        setSaveOpen(true);
      }
    } else {
      setSaveBIOpen(true);
    }
  };

  const deleteWorkedTime = async (id) => {
    let data = await api.delete(`/${id}`);
    console.log(data);
    getWorkedTimes();
  };

  useEffect(() => {
    getWorkedTimes();
  }, []);

  const updateHoursValidations = (arriveExitValidation, lunchValidation) => {
    setArriveExitValidation(arriveExitValidation);
    setLunchValidation(lunchValidation);
  };

  const handleHoursChange = (arrive, exit, start, end) => {
    hours.arriveHour = arrive = arrive || hours.arriveHour;
    hours.exitHour = exit = exit || hours.exitHour;
    hours.lunchStart = start = start || hours.lunchStart;
    hours.lunchEnd = end = end || hours.lunchEnd;

    const { arriveExitValidation, lunchValidation } = validateHours(
      arrive,
      exit,
      start,
      end
    );

    if (arriveExitValidation && lunchValidation) {
      let workedHours = 0;
      const totalHours = exit - arrive;
      const lunchHours = end - start;

      workedHours = totalHours - lunchHours;
      setworkedHours(msToTime(workedHours));
      updateHoursValidations(arriveExitValidation, lunchValidation);
    } else {
      !arriveExitValidation ? setArriveExitOpen(true) : setLunchOpen(true);
      updateHoursValidations(arriveExitValidation, lunchValidation);
    }
  };

  const clearData = () => {
    setBasicInfo({
      employeeID: "",
      firstName: "",
      lastName: "",
    });
    setHours({
      arriveHour: new Date(),
      exitHour: new Date(),
      lunchStart: new Date(),
      lunchEnd: new Date(),
    });
    setworkedHours("00:00:00");
  };

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={3}>
          <Grid style={mainGridsStyle} item xs={4}>
            <WorkedHours
              workedHours={workedHours}
              titleStyle={mainH1Style}
            ></WorkedHours>
          </Grid>
          <Grid style={mainGridsStyle} item xs={4}>
            <ArriveExitHours
              handleHours={handleHoursChange}
              hours={hours}
              setHours={setHours}
            ></ArriveExitHours>
          </Grid>
          <Grid style={mainGridsStyle} item xs={4}>
            <LunchBreaks
              handleHours={handleHoursChange}
              hours={hours}
              setHours={setHours}
              titleStyle={mainH1Style}
            ></LunchBreaks>
          </Grid>
          <Grid item xs={12}>
            <BasicInfo data={basicInfo} setData={setBasicInfo}></BasicInfo>
          </Grid>
          <Grid item xs={12}>
            <AlertDialog
              dialogTitle={arriveExitDialogTitle}
              dialogDescription={arriveExitError}
              openState={arriveExitOpen}
              setOpenState={setArriveExitOpen}
            ></AlertDialog>
            <AlertDialog
              dialogTitle={lunchDialogTitle}
              dialogDescription={lunchError}
              openState={lunchOpen}
              setOpenState={setLunchOpen}
            ></AlertDialog>
            <AlertDialog
              dialogTitle={saveDialogTitle}
              dialogDescription={saveError}
              openState={saveOpen}
              setOpenState={setSaveOpen}
            ></AlertDialog>
            <AlertDialog
              dialogTitle={saveBIDialogTitle}
              dialogDescription={saveBIError}
              openState={saveBIOpen}
              setOpenState={setSaveBIOpen}
            ></AlertDialog>
          </Grid>
          <Grid
            container
            alignItems="flex-start"
            justify="flex-end"
            direction="row"
            item
            xs={12}
          >
            <Button
              onClick={createWorkedTime}
              variant="contained"
              color="primary"
              size="large"
            >
              Save
            </Button>
            <Button
              onClick={clearData}
              variant="contained"
              color="secondary"
              size="large"
            >
              Clear
            </Button>
          </Grid>
          <Grid item xs={12}>
            <EmployeeHours
              employees={employees}
              deleteWT={deleteWorkedTime}
              handleChange={getWorkedTimes}
            ></EmployeeHours>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
