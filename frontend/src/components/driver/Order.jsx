import { useState } from "react";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import OrderCancelConfirmationModal from "./OrderCancelConfirmationModal";
import OrderDetailModal from "../OrderDetailModal";
import { getBadgeColor } from "../../utils/common";

export default function Order({ order }) {
  const [showOrderCancelModal, setShowOrderCancelModal] = useState(false);
  const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);

  return (
    <>
      <tr>
        <td>{order.buyer_firstname + " " + order.buyer_lastname}</td>
        <td>{order.address}</td>
        <td>
          {order.payment_method === "cash" ? (
            <MDBIcon far icon="money-bill-alt" />
          ) : (
            <MDBIcon fas icon="credit-card" />
          )}{" "}
          {order.price}
        </td>
        <td>
          <MDBBadge color={getBadgeColor(order.status)} pill>
            {order.status}
          </MDBBadge>
        </td>
        <td>
          <div className="d-flex gap-2">
            <MDBBtn
              rounded
              color="primary"
              onClick={() => setShowOrderDetailModal(true)}
            >
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
        </td>
      </tr>

      <OrderCancelConfirmationModal
        show={showOrderCancelModal}
        onClose={() => setShowOrderCancelModal(false)}
        onConfirm={() => console.log("Order cancelled")}
      />

      <OrderDetailModal
        show={showOrderDetailModal}
        onClose={() => setShowOrderDetailModal(false)}
        order={order}
      />
    </>
  );
}
