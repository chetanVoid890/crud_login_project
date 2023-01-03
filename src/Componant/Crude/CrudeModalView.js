import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "../../redux/store";
// =====================================
import * as Yup from "yup";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// ======================================================

import {
  Box,
  Card,
  Grid,
  Stack,
  Button,
  Backdrop,
  CircularProgress,
} from "@mui/material";

// ======================================================

import { addCrudData } from "../../redux/slice/crude/CrudeAction";
import RHFTextField from "../../Hooks_Form/TextFiled";
import FormProvider from "../../Hooks_Form/FormProvider";

const CrudeModalView = ({ onClose, onEdit, currentAlternator }) => {
  // ============================================================
  const dispatch = useDispatch();
  const NewUserSchema = Yup.object().shape({
    category: Yup.string().required("Category is required"),
    price: Yup.string().required("Price Number is required"),
    rate: Yup.string().required("Power Rateing required"),
    count: Yup.number("Only enter number").required("No of Phase is required"),
  });

  // =======================================================
  const defaultValues = useMemo(
    () => ({
      category: currentAlternator?.manufacturer || "",
      price: currentAlternator?.serialNumber || "",
      rate: currentAlternator?.powerRating || "",
      count: currentAlternator?.noOfPhase || "",
    }),
    []
  );

  // =======================================================
  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  // =======================================================

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // useEffect(() => {
  //   if (onEdit && currentAlternator) {
  //     reset(defaultValues);
  //   }
  //   if (!onEdit) {
  //     reset(defaultValues);
  //   }
  //   if (message !== "" && responseStatus !== "") {
  //     enqueueSnackbar(message, {
  //       variant: responseStatus === true ? "success" : "error",
  //     });
  //     if (responseStatus === true) {
  //       reset();
  // closeModal();
  //     }
  //   }
  // }, []);

  // =======================================================

  const onSubmit = (data) => {
    console.log("data", data);
    try {
      if (onEdit) {
        console.log("onEdit", onEdit);
      } else {
        dispatch(addCrudData(data));
        // console.log("fale", data);
      }
    } catch (error) {
      console.log("hello");
    }
  };

  // ======================================================

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ px: 5, boxShadow: "none", paddingTop: "10px" }}>
              <Box
                sx={{
                  display: "grid",
                  columnGap: 2,
                  rowGap: 3,
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                  },
                }}
              >
                <RHFTextField name="category" label="Category" />
                <RHFTextField name="price" label="Price" />
                <RHFTextField name="rate" label="Rate" />
                <RHFTextField name="count" label="Count" />
              </Box>

              <Stack
                alignItems="flex-end"
                sx={{ my: 3 }}
                className="ModalButton"
              >
                <LoadingButton
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  sx={{ mr: 3 }}
                >
                  {onEdit ? "Edit Alternator" : "Add Alternator"}
                </LoadingButton>
                <Button variant="outlined" color="error" onClick={onClose}>
                  Cancel
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
};

export default CrudeModalView;
