import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
} from "mdb-react-ui-kit";
import Order from "./Order";

export default function Delivery({ orders }) {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Orders to be Delivered</MDBCardTitle>
          <MDBListGroup>
            {orders.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
