import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";
import Drivers from "../components/dispatcher/Drivers";
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

const drivers = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "test",
    phone_number: "123-456-7890",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    email: "test",
    phone_number: "123-456-7890",
  },
];

export default function DispatcherPage() {
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
