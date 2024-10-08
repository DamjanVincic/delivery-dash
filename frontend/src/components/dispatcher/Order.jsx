import { useState } from "react";
import { MDBBadge, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import OrderDetailModal from "../OrderDetailModal";
import {
  getOrderStatusBadgeColor,
  getOrderRowColor,
  formatString,
  parseMinutes,
} from "../../utils/common";

export default function Order({ order }) {
  const [showOrderDetailModal, setShowOrderDetailModal] = useState(false);

  const {
    buyer_firstname,
    buyer_lastname,
    payment_method,
    address,
    price,
    status,
    late_time,
  } = order;

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
        <td>{late_time ? parseMinutes(late_time) : "/"}</td>
        <td>
          <div className="d-flex gap-2">
            <MDBBtn
              rounded
              color="primary"
              onClick={() => setShowOrderDetailModal(true)}
            >
              <MDBIcon fas icon="info" />
            </MDBBtn>
          </div>
        </td>
      </tr>

      <OrderDetailModal
        show={showOrderDetailModal}
        onClose={() => setShowOrderDetailModal(false)}
        order={order}
      />
    </>
  );
}
