export const getOrderStatusBadgeColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "In Progress":
      return "info";
    case "Delivered":
      return "success";
    case "Failed":
      return "danger";
    default:
      return "secondary";
  }
};
