import pluralize from "pluralize";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const getDaySuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th"; // Special case for 11th to 13th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
};

const formatSeconds = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursString = hours > 0 ? `${hours} ${pluralize("hour", hours)}` : "";
  const minutesString =
    minutes > 0 ? `${minutes} ${pluralize("minute", minutes)}` : "";
  const secondsString = `${seconds} ${pluralize("second", seconds)}`;

  return [hoursString, minutesString, secondsString].filter(Boolean).join(" ");
};

export { formatDate, formatSeconds };
