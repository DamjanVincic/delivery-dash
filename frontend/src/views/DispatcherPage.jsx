import { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import backgroundImage from "../assets/background.jpg";
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

    const fetchData = async () => {
      await Promise.all([fetchDrivers(), fetchOrders(), fetchDeliveries()]);
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="bg-img"
      className="p-5 text-center bg-image img-fluid"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100vh",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
        <div className="d-flex justify-content-center align-items-center mt-5">
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
        </div>
      </div>
    </div>
  );
}
