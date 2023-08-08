const formatDate = (dateString) => {
  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;

  return `${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}`;
};

export const formatDateTime = (date, time) => {
  const formattedDate = formatDate(date);

  return `${formattedDate} at ${time}`;
};
