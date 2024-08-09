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
import { getBadgeColor } from "../utils/common";

export default function OrderDetailModal({ show, onClose, order }) {
  return (
    <MDBModal open={show} onClose={onClose} tabIndex="-1">
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Order #{order.id}</MDBModalTitle>
            <MDBBtn className="btn-close" color="none" onClick={onClose} />
          </MDBModalHeader>
          <MDBModalBody>
            <MDBTable bordered striped className="d-flex align-items-center">
              <MDBTableHead>
                <th />
                <th />
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <strong>Customer name</strong>
                  </td>
                  <td>{order.buyer_firstname + " " + order.buyer_lastname}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Deliver at</strong>
                  </td>
                  <td>{order.deliver_at}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Address</strong>
                  </td>
                  <td>{order.address}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Phone number</strong>
                  </td>
                  <td>{order.phone_number}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Price</strong>
                  </td>
                  <td>{order.price}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Payment method</strong>
                  </td>
                  <td>{order.payment_method}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Status</strong>
                  </td>
                  <td>
                    <MDBBadge color={getBadgeColor(order.status)} pill>
                      {order.status}
                    </MDBBadge>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Comment</strong>
                  </td>
                  <td>{order.comment ? order.comment : "/"}</td>
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
