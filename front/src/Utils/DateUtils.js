import moment from "moment";
import "moment/locale/fr"; // Import French locale

export const formatDate = (createdAt) => {
  const date = moment(createdAt);
  // Check if the date is today
  if (date.isSame(moment(), "day")) {
    return date.format("HH:mm:ss");
  } else {
    // Use French locale to format the date as "day month"
    return date.locale("fr").format("DD MMMM");
  }
};
