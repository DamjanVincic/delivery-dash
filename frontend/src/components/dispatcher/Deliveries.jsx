import { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Delivery from "./Delivery";

export default function Deliveries({ deliveries }) {
  const [showDeliveryOrders, setShowDeliveryOrders] = useState(null);

  const toggleCollapse = (deliveryId) => {
    setShowDeliveryOrders((prev) => (prev === deliveryId ? null : deliveryId));
  };

  return (
    <MDBContainer className="mb-5">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Today&apos;s Deliveries</MDBCardTitle>
          <MDBTable align="middle" responsive striped>
            <MDBTableHead>
              <tr>
                <th scope="col">Driver</th>
                <th scope="col">Status</th>
                <th scope="col" />
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {deliveries.map((delivery) => (
                <Delivery
                  key={delivery.id}
                  delivery={delivery}
                  showOrders={showDeliveryOrders}
                  setShowOrders={toggleCollapse}
                />
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
