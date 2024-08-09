import { useState } from "react";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
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
    <MDBModal staticBackdrop open={show} onClose={onClose} tabIndex="-1">
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Confirm Cancellation</MDBModalTitle>
            <MDBBtn className="btn-close" color="none" onClick={onClose} />
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
