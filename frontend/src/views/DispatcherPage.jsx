import { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Drivers from "../components/dispatcher/Drivers";
import Orders from "../components/dispatcher/Orders";
import Deliveries from "../components/dispatcher/Deliveries";
import api from "../utils/api";

export default function DispatcherPage() {
  const [drivers, setDrivers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      const response = await api.get("dispatcher/users/drivers/");
      setDrivers(response.data);
    };

    const fetchOrders = async () => {
      const response = await api.get("dispatcher/orders/");
      setOrders(response.data);
    };

    const fetchDeliveries = async () => {
      const response = await api.get("dispatcher/deliveries/");
      setDeliveries(response.data);
    };

    fetchDrivers();
    fetchOrders();
    fetchDeliveries();
  }, []);

  return (
    <MDBContainer fluid>
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
