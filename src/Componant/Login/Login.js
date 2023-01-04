import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginUser from "../../redux/slice/register/RegisterAction";
import { useFormik } from "formik";
import { Button, TextField, Box } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();
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
        console.log(res, "-----");
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
// const onChangeHandler = (event) => {
//     setForm({
//       ...getForm,
//       [event.target.name]: event.target.value,
//     });
//     console.log("login", getForm);
// };

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     let getFormValidationDetails = getFormValidation;

//     for (let obj in getFormValidationDetails) {
//       if (getFormValidationDetails[obj]["required"] && getForm[obj] === "") {
//         getFormValidationDetails[obj]["status"] = "required";
//       } else if (
//         getFormValidationDetails[obj]["pattern"] &&
//   !getFormValidationDetails[obj]["pattern"].test(getForm[obj]);
//       ) {
//         getFormValidationDetails[obj]["status"] = "pattern";
//       } else {
//         getFormValidationDetails[obj]["status"] = "false";
//       }
//     }
//     setFormValidation({ ...getFormValidationDetails });
//     setSubmit(true);

//   if (getForm.email === email && getForm.password == password) {
//     dispatch(loginSuccess());
//     navigation("/product");
//   }
//   };

// import React from "react";
// import { Container, styled } from '@mui/system';
// import { Typography, Button, Divider, Box } from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { useFormik } from 'formik';
// import { useDispatch, useSelector } from 'react-redux';
// import { SignupValidate } from '../validation';
// import { eventRegister } from '../../redux/event';
// import EventDetail from "../eventDetail";
// import { Login } from "../login";
// import { getCookie, SetAuthCookie } from '../../utils/Cookies';
// import VerifySignUp from "../verifySignup";

// const FormBox = styled(Box)`
// .form_field {
//   border-radius: 4px;
//   position: relative;
//   background-color: theme.palette.mode=== 'light' ? '#fcfcfb' :'#2b2b2b';
//   border: 1px solid #B5B5B5;
//   font-size: 16px;
//   line-height: 19px;
//   width: 100%;
//   padding: 0 12px;
//   height: 48px;
//   margin: 5px 0;
//   outline: none;
// }
// `;

// const StyleContainer = styled(Container)`
// padding: 0px;
// .MuiCheckbox-root + .MuiFormControlLabel-label {
//   font-size: 15px;
// }
// .MuiDivider-wrapper .MuiChip-root.MuiChip-outlined {
//   border-radius: 100%;
//   height: 30px;
//   width: 30px;
// }
// .MuiDivider-wrapper .MuiChip-label {
//   padding: 0px;
// }
// .MuiFormControlLabel-labelPlacementEnd {
//   margin: 0px;
// }
// .errorMsg {
//   color: red;
// }
// label {
//   font: normal normal normal 14px/18px Montserrat;
// }
// .title_phone_email {
//   display: flex;
//   align-items: center;
// }
// .title_phone_email p {
//   font-size: 25px;
//   margin: 0;
// }
// .title_phone_email svg {
//   fill: #FF7200;
// }
// `;

// const EmailSignUp = () => {
//   const dispatch = useDispatch<any>();
//   const event: any = useSelector((state: any) => state.event);
//   // console.log("hello",event);

//   const [isVerifyPage, setVerifyPage] = React.useState<Boolean>(false);
//   const [email, setEmail] = React.useState('');

//   const activityCode = getCookie('eventCode');
//   // console.log("hello",event,activityCode);
//   React.useEffect(() => {
//     if (event?.eventRegisterData) {
//       // event
//       setVerifyPage(true)
//       localStorage.setItem('guestEmail', values.email)
//     }
//   }, [event?.eventRegisterData])

//   React.useEffect(() => {
//     if (event?.confirmationData) {
//       const authData = event?.confirmationData?.AuthenticationResult;
//       SetAuthCookie({ ...authData, username: event?.confirmationData?.username });
//       window.location.href = `/play/sshow/${activityCode}/accept-rules`;
//     }
//   }, [event])

//   const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
//     initialValues: {
//       email: ""
//     },
//     validate: SignupValidate,
//     onSubmit: async (values: any) => {
//       const username = values?.email;
//       setEmail(values?.email);
//       localStorage.setItem('username', username);
//       dispatch(eventRegister({ username: username, eventCode: activityCode }))
//     }
//   });

// export const SignupValidate = () => {
//     const errors= {};
//
//       if (!values.email) {
//         errors.email = 'Please enter email';
//       } else if (values.email && !emailPattern.test(values.email)) {
//         errors.email = 'Valid Email Required';
//       }
//       if (!values?.password) {
//         errors.password = 'Please enter password number';
//       }
//       } else if (values.password && !passwordPattern.test(values.password)) {
//         errors.password = 'Valid password Required';
//       }
//     }
//     return errors;
//   };

//   return (
//     <>
//       <StyleContainer>
//         <EventDetail showHide={false}>
//           {
//             isVerifyPage ?
//               <>
//                 <VerifySignUp email={email} />
//               </> :
//               <>
//                 <Typography component="div" className="title_phone_email">
//                   <KeyboardArrowLeftIcon />
//                   <p>Email Login</p>
//                 </Typography>
//                 <Divider style={{ margin: "15px auto 30px auto", borderColor: "#D2D2D2" }} />
//                 <form onSubmit={handleSubmit}>
//                   <FormBox>
//                     <label>Enter Email Address</label>
//                     <input className="form_field" onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter Email Address" id="email" />
//                     {errors.email && touched.email ? (<div className='errorMsg'>{errors.email as string}</div>) : null}
//                   </FormBox>
//                      <FormBox>
// /                    <label>Enter Email Address</label>
//                     <input className="form_field" onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter Enter password" id="email" />
// /                   {errors.password && touched.password ? (<div className='errorMsg'>{errors.password as string}</div>) : null}
//                   </FormBox>
//                   <Button type="submit" variant="contained" style={{ margin: "20px auto 35px auto", display: "flex", background: "#FF7200", borderRadius: "20px", fontSize: 14, lineHeight: "18px", height: "40px", width: "198px", boxShadow: "none" }} >PROCEED</Button>
//                 </form>
//                 <Login isEmail={true} />
//               </>
//           }
//         </EventDetail>

//       </StyleContainer>
//     </>
//   );
// }

// export default EmailSignUp;
