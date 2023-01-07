import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginUser from "../../redux/slice/register/RegisterAction";
import { useFormik } from "formik";
import { Button, TextField, Box } from "@mui/material";

const Login = (props) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const signInValidate = (values) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordPattern = /^[A-Z0-9._%+-]{2,8}$/i;
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Valid Email Required";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (!passwordPattern.test(values.password)) {
      errors.email = "Valid password Required";
    }

    return errors;
  };

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validate: signInValidate,
      onSubmit: async (values) => {
        const { email, password } = values;
        const res = await dispatch(LoginUser({ email, password }));
        if (res.type === "authentication/logInFail") {
          setMessage("Please input right information");
        }
        if (res.type === "authentication/LoginSuccess") {
          window.location.href = `${window.location.origin}/product`;
        }
      },
    }
  );

  return (
    <>
      <Box
        className="page_banner"
        sx={{
          p: "40px 80px ",
          m: "50px auto",
          border: "1px dashed black",
          width: 300,
          height: 200,
          backgroundColor: "gray",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="input-field pt-0">
            <span>Enter Email Address</span>
            <TextField
              sx={{ m: "5px 0" }}
              type="email"
              id="email"
              className="textField"
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email && !!touched.email}
            />
          </div>

          {errors.email && touched.email ? (
            <div className="errorMsg">{errors.email}</div>
          ) : null}

          <div className="input-field">
            <span>Enter Password</span>
            <TextField
              sx={{ m: "5px 0" }}
              type="password"
              id="password"
              className="textField"
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.password && !!touched.password}
            />
          </div>
          {errors.password && touched.password ? (
            <div className="errorMsg">{errors.password}</div>
          ) : null}

          <Button variant="contained" type="submit" sx={{ m: "20px 0" }}>
            LogIn
          </Button>
          {message && (
            <div className="errorMsg" style={{ borderColor: "#D2D2D2" }}>
              {message}
            </div>
          )}
        </form>
      </Box>
    </>
  );
};

export default Login;
