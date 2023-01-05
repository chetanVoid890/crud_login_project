import React from "react";
import PropTypes from "prop-types";
import { Dialog, Paper } from "@mui/material";

export default function CrudeModal({ open, onClose, children }) {
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
}
