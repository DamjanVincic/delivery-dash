import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";
import Orders from "../components/dispatcher/Orders";

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

export default function DispatcherPage() {
  return (
    <MDBContainer>
      <MDBRow between>
        <MDBCol size="6">
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </MDBTableHead>
          </MDBTable>
        </MDBCol>
        <MDBCol size="6">
          <Orders orders={orders} />
        </MDBCol>
      </MDBRow>
      <MDBRow center>
        <MDBCol size="4">
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>Test</th>
              </tr>
            </MDBTableHead>
          </MDBTable>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
