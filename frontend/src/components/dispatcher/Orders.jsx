import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Order from "./Order";

export default function Orders({ orders }) {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Today&apos;s Orders</MDBCardTitle>
          <MDBTable align="middle" responsive striped hover>
            <MDBTableHead>
              <tr>
                <th scope="col">Customer</th>
                <th scope="col">Address</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Late Time</th>
                <th scope="col">Details</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {orders.map((order) => (
                <Order key={order.id} order={order} />
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
