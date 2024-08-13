import { useState } from "react";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import OrderCancelConfirmationModal from "./OrderCancelConfirmationModal";
import OrderDetailModal from "../OrderDetailModal";
import {
  getOrderStatusBadgeColor,
  getOrderRowColor,
  formatString,
} from "../../utils/common";
import api from "../../utils/api";

export default function Order({ order }) {
  const [value, setValue] = useState(false);

  const [showOrderCancelModal, setShowOrderCancelModal] = useState(false);
  const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);

  const {
    buyer_firstname,
    buyer_lastname,
    address,
    payment_method,
    price,
    status,
    late_time,
  } = order;

  const completeOrder = async () => {
    try {
      const response = await api.patch(`driver/order/${order.id}/complete/`);
      if (response.status === 200) order.status = response.data.status;
      setValue(!value);
      toast.success("Order completed successfully", {
        position: "bottom-right",
        autoClose: 2500,
      });
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error, {
        position: "bottom-right",
        autoClose: 2500,
      });
    }
  };

  const cancelOrder = async (comment) => {
    try {
      const response = await api.patch(`driver/order/${order.id}/fail/`, {
        comment,
      });
      if (response.status === 200) {
        order.status = response.data.status;
        order.comment = response.data.comment;
      }
      setValue(!value);
      toast.success("Order cancelled successfully", {
        position: "bottom-right",
        autoClose: 2500,
      });
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error, {
        position: "bottom-right",
        autoClose: 2500,
      });
    }
  };

  return (
    <>
      <tr className={getOrderRowColor(late_time)}>
        <td>{buyer_firstname + " " + buyer_lastname}</td>
        <td>{address}</td>
        <td>
          {payment_method === "cash" ? (
            <MDBIcon far icon="money-bill-alt" />
          ) : (
            <MDBIcon fas icon="credit-card" />
          )}{" "}
          {price}
        </td>
        <td>
          <MDBBadge color={getOrderStatusBadgeColor(status)} pill>
            {formatString(status)}
          </MDBBadge>
        </td>
        <td>{late_time ? `${late_time} minutes` : "/"}</td>
        <td>
          <div className="d-flex gap-2">
            <MDBBtn
              rounded
              color="primary"
              onClick={() => setShowOrderDetailModal(true)}
            >
              <MDBIcon fas icon="info" />
            </MDBBtn>
            <MDBBtn
              rounded
              color="success"
              onClick={completeOrder}
              disabled={status !== "pending"}
            >
              <MDBIcon fas icon="check" />
            </MDBBtn>
            <MDBBtn
              rounded
              color="danger"
              onClick={() => setShowOrderCancelModal(true)}
              disabled={status !== "pending"}
            >
              <MDBIcon fas icon="times" />
            </MDBBtn>
          </div>
        </td>
      </tr>

      <OrderCancelConfirmationModal
        show={showOrderCancelModal}
        onClose={() => setShowOrderCancelModal(false)}
        onConfirm={cancelOrder}
      />

      <OrderDetailModal
        show={showOrderDetailModal}
        onClose={() => setShowOrderDetailModal(false)}
        order={order}
      />
    </>
  );
}
