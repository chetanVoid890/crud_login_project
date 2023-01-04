import * as React from "react";
// import "./product.css";
import "./product.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ProductView = ({ open, onClose, datasend }) => {
  return (
    <>
      {open && (
        <Dialog
          className="dialog_main"
          open={open}
          onClose={onClose}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            className="dialog_title"
            style={{ cursor: "move" }}
            id="draggable-dialog-title"
          >
            Product
          </DialogTitle>

          <DialogContent className="dialog_content">
            <img src={datasend.image} className="profileImageUserView" alt="" />
            <DialogContentText className="dialog_contentTitle">
              {datasend.title}
            </DialogContentText>
            <DialogContentText className="dialog_contentSubTitle">
              {datasend.category}
            </DialogContentText>
            <DialogContentText className="dialog_contentDescription">
              {datasend.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={onClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default ProductView;
