export const currentDate = () => {
  let today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
};

export const currentDateCalendar = () => {
  let today = new Date();

  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  const current = yyyy + '-' + mm + '-' + dd;
  const minDate = yyyy - 10 + '-' + mm + '-' + dd;
  const maxDate = current;
  return { current, minDate, maxDate };
};

export const currentTimeNow = () => {
  const today = new Date();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  return {
    hours: today.getHours(),
    minutes: today.getMinutes(),
    seconds: today.getSeconds(),
    timeString: time,
    timeStamp: Date.now(),
  };
};
