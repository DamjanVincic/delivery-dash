import { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

export default function CancelConfirmationModal({ show, onClose, onConfirm }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleConfirm = () => {
    onConfirm(comment);
    setComment("");
    onClose();
  };

  return (
    <MDBModal staticBackdrop open={show} tabIndex="-1">
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <h5 className="modal-title">Confirm Cancellation</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </MDBModalHeader>
          <MDBModalBody>
            <p>
              Are you sure you want to cancel this order? Please provide a
              comment for the cancellation.
            </p>
            <MDBInput
              type="textarea"
              rows="3"
              label="Comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={onClose}>
              Cancel
            </MDBBtn>
            <MDBBtn color="danger" onClick={handleConfirm}>
              Confirm
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
