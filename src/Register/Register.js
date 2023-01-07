import { registerSuccess } from "../redux/slice/register/RegisterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Button, TextField, Box } from "@mui/material";

const Register = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

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
      onSubmit: (values) => {
        const { email, password } = values;
        dispatch(registerSuccess(values));
        navigation("/login");
      },
    }
  );

  return (
    <>
      <Box className="page_banner">
        <form onSubmit={handleSubmit}>
          <div className="input-field pt-0">
            <span>Enter Email Address</span>
            <TextField
              fullWidth
              // label="Email ID"
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
              fullWidth
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
          <Button
            className="button-container__start remove_btn_hover"
            type="submit"
          >
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Register;
