import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { Card, Grid, Stack, Button } from "@mui/material";
import FormProvider from "../../../Hooks_Form/FormProvider";

// ----------------------------------------------------------------------

export default function Delete_Modal({ onClose, handleDelete }) {
  const methods = useForm({});

  const { reset, handleSubmit } = methods;

  const deleteSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      handleDelete();
    } catch (error) {
      console.log("DeleteProblem");
    }
  };

  const onSubmit = async () => {
    // window.location.reload(false);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
    } catch (error) {
      console.log("hello");
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Card sx={{ px: 5, boxShadow: "none", paddingTop: "10px" }}>
            <div style={{ textAlign: "center" }}>
              Are you sure you want to delete?
            </div>
            <Stack alignItems="flex-end" sx={{ my: 3 }} className="ModalButton">
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ mr: 3 }}
                onClick={deleteSubmit}
              >
                Yes
              </LoadingButton>
              <Button variant="outlined" color="error" onClick={onClose}>
                No
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
