import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
// ==================================
// DeleteModal.propTypes = {
//   open: PropTypes.bool,
//   onClose: PropTypes.bool,
//   children: PropTypes.any,
// };
// =================================
const DeleteModal = ({ open, onClose, children }) => {
  return (
    <>
      {open && (
        <Dialog
          className="dialog_main"
          open={open}
          onClose={onClose}
          aria-labelledby="draggable-dialog-title"
        >
          {children}
        </Dialog>
      )}
    </>
  );
};

export default DeleteModal;
