export const getOrderStatusBadgeColor = (status) => {
  switch (status) {
    case "pending":
      return "warning";
    case "in_progress":
      return "info";
    case "delivered":
      return "success";
    case "failed":
      return "danger";
    default:
      return "secondary";
  }
};

export const getDeliveryStatusBadgeColor = (status) => {
  switch (status) {
    case "in_progress":
      return "warning";
    case "finished":
      return "success";
    default:
      return "secondary";
  }
};
