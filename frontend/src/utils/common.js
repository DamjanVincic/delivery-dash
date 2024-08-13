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

export {
  getOrderStatusBadgeColor,
  getDeliveryStatusBadgeColor,
  getOrderRowColor,
  formatString,
};
