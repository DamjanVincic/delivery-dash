import { useState } from "react";
import {
  MDBCardText,
  MDBListGroupItem,
  MDBBadge,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import OrderCancelConfirmationModal from "./OrderCancelConfirmationModal";

const getBadgeColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "In Progress":
      return "info";
    case "Delivered":
      return "success";
    case "Failed":
      return "danger";
    default:
      return "secondary";
  }
};

export default function Order({ order }) {
  const [showOrderCancelModal, setShowOrderCancelModal] = useState(false);

  return (
    <>
      <MDBListGroupItem className="d-flex justify-content-between align-items-center">
        <div>
          <MDBCardText>
            <strong>Customer:</strong> {order.customer}
          </MDBCardText>
          <MDBCardText>
            <strong>Address:</strong> {order.address}
          </MDBCardText>
        </div>
        <MDBBadge color={getBadgeColor(order.status)} pill>
          {order.status}
        </MDBBadge>
        <div className="d-flex gap-2">
          <MDBBtn rounded color="primary">
            <MDBIcon fas icon="info" />
          </MDBBtn>
          <MDBBtn rounded color="success">
            <MDBIcon fas icon="check" />
          </MDBBtn>
          <MDBBtn
            rounded
            color="danger"
            onClick={() => setShowOrderCancelModal(true)}
          >
            <MDBIcon fas icon="times" />
          </MDBBtn>
        </div>
      </MDBListGroupItem>

      <OrderCancelConfirmationModal
        show={showOrderCancelModal}
        onClose={() => setShowOrderCancelModal(false)}
        onConfirm={() => console.log("Order cancelled")}
      />
    </>
  );
}
