import React from "react";
import { Dialog } from "@mui/material";

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
