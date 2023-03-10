import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
// ==================================

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
