export function dateToTime(date) {
  let seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours();

  return hours + ":" + minutes + ":" + seconds;
}

export function msToTime(milliseconds) {
  let seconds = Math.floor((milliseconds / 1000) % 60),
    minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
    hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

export function validateHours(arrive, exit, start, end) {
  const arriveExitValidation = exit >= arrive ? true : false;
  const lunchValidation = end >= start ? true : false;

  return { arriveExitValidation, lunchValidation };
}

export function validateBasicInfo(basicInfo) {
  const { employeeID, firstName, lastName } = basicInfo;
  return employeeID && firstName && lastName;
}

// General titles and messages
export const arriveExitDialogTitle = "Arrive Exit Error";
export const lunchDialogTitle = "Start End Lunch Error";
export const saveDialogTitle = "Save Error";
export const saveBIDialogTitle = "Save Basic Info Error";
export const arriveExitError =
  "Arrive hour can not be equal or higher than exit hour";
export const lunchError =
  "Lunch start hour can not be equal or higher than lunch end hour";
export const saveError =
  "Can not save because you have an Arrive Exit Error or a Start End Lunch Error";
export const saveBIError =
  "Can not save because you have a Basic Info Error, please fill all the fields";
