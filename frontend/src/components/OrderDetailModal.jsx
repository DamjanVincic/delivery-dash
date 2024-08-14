import {
  MDBBtn,
  MDBBadge,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import {
  getOrderStatusBadgeColor,
  formatString,
  parseDateTime,
  parseMinutes,
} from "../utils/common";

export default function OrderDetailModal({ show, onClose, order }) {
  const {
    id,
    buyer_firstname,
    buyer_lastname,
    deliver_at,
    address,
    phone_number,
    price,
    payment_method,
    status,
    comment,
    delivered_at,
    late_time,
  } = order;

  return (
    <MDBModal open={show} onClose={onClose} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Order #{id}</MDBModalTitle>
            <MDBBtn className="btn-close" color="none" onClick={onClose} />
          </MDBModalHeader>
          <MDBModalBody>
            <MDBTable bordered striped align="middle">
              <MDBTableHead>
                <th />
                <th />
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <strong>Customer Name</strong>
                  </td>
                  <td>{buyer_firstname + " " + buyer_lastname}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Deliver At</strong>
                  </td>
                  <td>{parseDateTime(deliver_at)}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address</strong>
                  </td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone Number</strong>
                  </td>
                  <td>{phone_number}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Price</strong>
                  </td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Payment Method</strong>
                  </td>
                  <td>{payment_method}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Status</strong>
                  </td>
                  <td>
                    <MDBBadge color={getOrderStatusBadgeColor(status)} pill>
                      {formatString(status)}
                    </MDBBadge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Comment</strong>
                  </td>
                  <td>{comment ? comment : "/"}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Delivered At</strong>
                  </td>
                  <td>{delivered_at ? parseDateTime(delivered_at) : "/"}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Late Time</strong>
                  </td>
                  <td>{late_time ? parseMinutes(late_time) : "/"}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={onClose}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
