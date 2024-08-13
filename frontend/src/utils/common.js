const getOrderStatusBadgeColor = (status) => {
  switch (status) {
    case "pending":
      return "warning";
    case "in_progress":
      return "info";
    case "delivered":
      return "success";
    case "cancelled":
      return "danger";
    default:
      return "secondary";
  }
};

const getDeliveryStatusBadgeColor = (status) => {
  switch (status) {
    case "in_progress":
      return "warning";
    case "completed":
      return "success";
    default:
      return "secondary";
  }
};

const getOrderRowColor = (late_time) => {
  return late_time ? "table-danger" : "";
};

const formatString = (str) => {
  return str
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const parseDateTime = (date) => {
  return new Date(date).toLocaleTimeString([], {
    timeZone: "Europe/Belgrade",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const parseMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours !== 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

export {
  getOrderStatusBadgeColor,
  getDeliveryStatusBadgeColor,
  getOrderRowColor,
  formatString,
  parseDateTime,
  parseMinutes,
};
