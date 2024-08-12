import { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Drivers from "../components/dispatcher/Drivers";
import Orders from "../components/dispatcher/Orders";
import Deliveries from "../components/dispatcher/Deliveries";
import api from "../utils/api";

const orders = [
  {
    id: 1,
    buyer_firstname: "John",
    buyer_lastname: "Doe",
    deliver_at: "2021-12-31",
    address: "123 Main St",
    phone_number: "123-456-7890",
    price: 100.0,
    status: "Pending",
  },
  {
    id: 2,
    buyer_firstname: "Jane",
    buyer_lastname: "Doe",
    deliver_at: "2021-12-31",
    address: "123 Main St",
    phone_number: "123-456-7890",
    price: 100.0,
    status: "Pending",
  },
];

const deliveries = [
  {
    id: 1,
    driver_id: 1,
    order_id: 1,
    orders: [
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
    ],
    status: "Pending",
  },
  {
    id: 2,
    driver_id: 2,
    order_id: 2,
    orders: [],
    status: "Pending",
  },
];

export default function DispatcherPage() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await api.get("dispatcher/users/drivers/");
      setDrivers(response.data);
    };
    fetchDrivers();
  }, []);

  return (
    <MDBContainer>
      <MDBRow between>
        <MDBCol size="6">
          <Drivers drivers={drivers} />
        </MDBCol>
        <MDBCol size="6">
          <Orders orders={orders} />
        </MDBCol>
      </MDBRow>
      <MDBRow center>
        <MDBCol size="12">
          <Deliveries deliveries={deliveries} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
