import Delivery from "../components/Delivery";

export default function DriverPage() {
  const orders = [
    { id: 1, customer: "John Doe", address: "123 Elm St", status: "Pending" },
    {
      id: 2,
      customer: "Jane Smith",
      address: "456 Oak Ave",
      status: "Failed",
    },
    {
      id: 3,
      customer: "Alice Johnson",
      address: "789 Pine Rd",
      status: "Delivered",
    },
  ];

  return <Delivery orders={orders} />;
}
