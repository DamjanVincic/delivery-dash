import Delivery from "../components/Delivery";

export default function DriverPage() {
  const orders = [
    {
      id: 1,
      buyer_firstname: "John",
      buyer_lastname: "Doe",
      address: "123 Elm St",
      status: "Pending",
      payment_method: "cash",
      price: 100,
    },
    {
      id: 2,
      buyer_firstname: "Jane",
      buyer_lastname: "Smith",
      address: "456 Oak Ave",
      status: "Failed",
      payment_method: "card",
      price: 50,
    },
    {
      id: 3,
      buyer_firstname: "Alice",
      buyer_lastname: "Johnson",
      address: "789 Pine Rd",
      status: "Delivered",
      payment_method: "cash",
      price: 75,
    },
  ];

  return <Delivery orders={orders} />;
}
