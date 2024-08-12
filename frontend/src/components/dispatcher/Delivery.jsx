import {
  MDBBtn,
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Order from "./Order";
import { getDeliveryStatusBadgeColor, formatString } from "../../utils/common";

export default function Delivery({ delivery, showOrders, setShowOrders }) {
  const { orders, status } = delivery;

  return (
    <>
      <tr>
        <td>Driver</td>
        <td>
          <MDBBadge color={getDeliveryStatusBadgeColor(status)} pill>
            {formatString(status)}
          </MDBBadge>
        </td>
        <td>
          <MDBBtn onClick={() => setShowOrders(delivery.id)}>
            {showOrders === delivery.id ? "Hide" : "Show"} Orders
          </MDBBtn>
        </td>
      </tr>
      <tr>
        <td colSpan={3}>
          <MDBCollapse open={showOrders === delivery.id}>
            <MDBTable responsive striped hover>
              <MDBTableHead>
                <tr>
                  <th scope="col">Customer</th>
                  <th scope="col">Address</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Details</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {orders.map((order) => (
                  <Order key={order.id} order={order} />
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCollapse>
        </td>
      </tr>
    </>
  );
}
