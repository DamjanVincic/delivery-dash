import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Driver from "./Driver";

export default function Drivers({ drivers }) {
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Available Drivers</MDBCardTitle>
          <MDBTable responsive striped hover>
            <MDBTableHead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {drivers.map((driver) => (
                <Driver key={driver.id} driver={driver} />
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
