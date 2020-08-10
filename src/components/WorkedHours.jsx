import React from "react";

export default function WorkedHours(props) {
  // const [workedHours, setWorkedHours] = useState("00:00:00");
  const { workedHours, titleStyle } = props;
  return (
    <React.Fragment>
      <h1 style={titleStyle}>Worked Hours</h1>
      <h1>{workedHours}</h1>
      <h3>Expected Working Hours</h3>
      <h3>8 Hours</h3>
    </React.Fragment>
  );
}
