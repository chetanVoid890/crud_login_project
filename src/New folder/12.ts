// import React, { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useFormik } from "formik";
// import {
//   Button,
//   TextField,
//   IconButton,
//   Container,
//   Box,
//   Alert,
//   Typography,
//   FormGroup,
//   AlertTitle,
//   FormControlLabel,
//   Checkbox,
//   CircularProgress,
// } from "@mui/material";
// import { SignInWrapper } from "./style";
// import { getProduct } from "../../redux/products";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Logo from "../../assets/logo/web_logo.svg";
// import { signInUser, resendEmail } from "../../redux/auth";
// import SocialLogin from "../socialLogin/socialLogin";
// import { getCookie } from "esstart-components";

// export const Login = () => {
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch<any>();
//   const productId = searchParams.get("productId");
//   const [resentEmailMsg, setResentEmailMsg] = useState(false);

//   const navigate = useNavigate();

//   const product: any = useSelector(
//     (state: any) => state.products?.selectedProduct
//   );
//   const resetEmail: any = useSelector(
//     (state: any) => state.auth?.resetEmailStatus
//   );

//   const onLoginSuccess = () => {
//     const next = localStorage.getItem("next");
//     let url = `${
//       productId ? `/dashboard?productId=${productId}` : "/dashboard"
//     }`;
//     const queryString = localStorage.getItem("queryString");
//     if (next) {
//       url = `${next}`;
//       localStorage.removeItem("next");
//     }
//     if (queryString) {
//       localStorage.removeItem("queryString");
//     }
//     window.location.href = `${url}`;
//     navigate(url);
//   };

//   useEffect(() => {
//     if (productId) {
//       dispatch(getProduct({ productId: productId }));
//     }
//   }, [searchParams, dispatch]);

//   const onHomeClick = () => {
//     const url: any = process.env.REACT_APP_WEBSITE_URL_LIVE;
//     window.location.href = url;
//   };

//   useEffect(() => {
//     if (resetEmail) {
//       setResentEmailMsg(true);
//     } else {
//       setResentEmailMsg(false);
//     }
//   }, [resetEmail]);

//   useEffect(() => {
//     if (resentEmailMsg) {
//       setTimeout(() => {
//         setResentEmailMsg(false);
//       }, 6000);
//     }
//   }, [resentEmailMsg]);

//   const [loading, toggleLoading] = useState<boolean>(false);
//   const [alert, setAlert] = useState(false);
//   const [alertContent, setAlertContent] = useState("");

//   interface IErrorSingIn {
//     email?: string;
//     password?: string;
//     rememberCheck?: boolean;
//   }

//   const signInValidate: any = (values: any) => {
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//     const errors = {} as IErrorSingIn;

//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!emailPattern.test(values.email)) {
//       errors.email = "Valid Email Required";
//     }

//     if (!values.password) {
//       errors.password = "Required";
//     }

//     return errors;
//   };

//   const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
//     {
//       initialValues: {
//         email: "",
//         password: "",
//         rememberCheck: true,
//       },
//       validate: signInValidate,
//       onSubmit: async (values: any) => {
//         const { rememberCheck, email, password } = values;
//         if (rememberCheck) {
//           toggleLoading(true);
//           const res = await dispatch(signInUser({ email, password }));

//           if (res.type === "auth/signin/fulfilled") {
//             onLoginSuccess();
//           }
//           if (res.type === "auth/signin/rejected") {
//             setAlert(true);
//             setAlertContent(res.payload.message);
//           }

//           toggleLoading(false);
//         }
//       },
//     }
//   );

//   const onRedirectToSignUp = () => {
//     navigate("/signup");
//   };

//   const handleResendEmail = () => {
//     const userName = getCookie("username");
//     if (userName) {
//       setAlert(false);
//       dispatch(resendEmail({ userName }));
//     }
//   };

//   return (
//     <SignInWrapper>
//       <Box className="login_background">
//         <Container>
//           <div className="form__wrapper login_page">
//             <div className="content_part">
//               <div className="login_menu" onClick={onHomeClick}>
//                 <IconButton>
//                   <ArrowBackIosIcon />
//                 </IconButton>
//                 <p>Home</p>
//               </div>
//               <img src={Logo} alt="Logo" className="website_logo" />
//               {!!product ? (
//                 <div className="product_box">
//                   <img src={product?.cardImgURL} alt="Product" />
//                   <h3>{product?.displayTitle}</h3>
//                   <p>{product?.shortDesc1} </p>
//                   <p>{product?.shortDesc2}</p>
//                 </div>
//               ) : (
//                 <h5>
//                   Your One stop shop for<p>Unforgettable</p>Party Entertainment
//                 </h5>
//               )}
//             </div>
//             <div className="login_form">
//               <Box className="page_banner">
//                 <h2 className="title">Login</h2>
//                 <p className="subtitle">
//                   Welcome Back ! Please Login to Continue
//                 </p>
//               </Box>
//               <form onSubmit={handleSubmit}>
//                 <div className="start">
//                   Don't have an account ?
//                   <Button className="start__login" onClick={onRedirectToSignUp}>
//                     REGISTER HERE
//                   </Button>
//                 </div>

//                 <div>
//                   <SocialLogin />
//                 </div>

//                 <div className="strike">
//                   <span> or </span>
//                 </div>

//                 {resentEmailMsg && (
//                   <>
//                     <Alert severity="success" style={{ marginBottom: "15px" }}>
//                       <AlertTitle>Successfully sent email</AlertTitle>
//                     </Alert>
//                   </>
//                 )}
//                 {alert && alertContent === "User is not confirmed." && (
//                   <Alert severity="error" style={{ marginBottom: "15px" }}>
//                     <AlertTitle>
//                       Oops: Your email account was not verified.
//                     </AlertTitle>
//                     We sent you a link to your email account, please check your
//                     email & spam folder, click on the link to verify your
//                     account. Did not receive the email?{" "}
//                     <a
//                       href="javascript:void(0)"
//                       onClick={() => handleResendEmail()}
//                     >
//                       Click here
//                     </a>
//                   </Alert>
//                 )}

//                 {alert && alertContent !== "User is not confirmed." && (
//                   <Alert style={{ marginBottom: "15px" }} severity="error">
//                     {alertContent}
//                   </Alert>
//                 )}

//                 <div className="input-field pt-0">
//                   <span>Enter Email Address</span>
//                   <TextField
//                     fullWidth
//                     // label="Email ID"
//                     id="email"
//                     className="textField"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={!!errors.email && !!touched.email}
//                   />
//                 </div>

//                 {errors.email && touched.email ? (
//                   <div className="errorMsg">{errors.email as string}</div>
//                 ) : null}

//                 <div className="input-field">
//                   <span>Enter Password</span>
//                   <TextField
//                     fullWidth
//                     type="password"
//                     // label="Enter Password"
//                     id="password"
//                     className="textField"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     error={!!errors.password && !!touched.password}
//                   />
//                 </div>
//                 {errors.password && touched.password ? (
//                   <div className="errorMsg">{errors.password as string}</div>
//                 ) : null}

//                 <Typography
//                   component="div"
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <FormGroup>
//                     <FormControlLabel
//                       control={
//                         <Checkbox
//                           id="rememberCheck"
//                           name="rememberCheck"
//                           onChange={handleChange}
//                         />
//                       }
//                       label="Remember Me"
//                     />
//                   </FormGroup>
//                   <span className="forgotPwd">
//                     {" "}
//                     <a href="/#">Forgot Password?</a>
//                   </span>
//                 </Typography>

//                 <div className="button-container">
//                   {loading ? (
//                     <CircularProgress />
//                   ) : (
//                     <Button
//                       className="button-container__start remove_btn_hover"
//                       type="submit"
//                     >
//                       {" "}
//                       Login
//                     </Button>
//                   )}
//                 </div>

//                 <Typography
//                   marginTop="15px"
//                   fontSize="14px"
//                   className="privacy_policychange"
//                 >
//                   By clicking button above, you agree to our{" "}
//                   <a
//                     className="anchor"
//                     href="https://www.esstart.com/tos"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Terms of use
//                   </a>{" "}
//                   and{" "}
//                   <a
//                     href="https://www.esstart.com/p-policy"
//                     className="anchor"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Privacy Policies
//                   </a>
//                 </Typography>
//               </form>
//             </div>
//           </div>
//         </Container>
//       </Box>
//     </SignInWrapper>
//     // </PublicRoute>
//   );
// };
