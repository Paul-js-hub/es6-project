/* eslint-disable no-undef */

const displayDate = () => {
  const DateTime = luxon.DateTime.local().toLocaleString(
    luxon.DateTime.DATETIME_MED,
  );
  return DateTime;
};

export default displayDate;
