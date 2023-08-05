const formatDate = (dateString) => {
  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;

  return `${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}`;
};

const formatTime = (timeString) => {
  const dateObj = new Date(timeString);

  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();

  return `${hour < 10 ? "0" : ""}${hour}:${minute < 10 ? "0" : ""}${minute}`;
};

export const formatDateTime = (date, time) => {
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  return `${formattedDate} at ${formattedTime}`;
};
