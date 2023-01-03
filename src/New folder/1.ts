// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useFormik } from "formik";
// import { getProduct } from "../../redux/products";
// import { NavLink } from "react-router-dom";
// import {
//   Button,
//   Box,
//   Container,
//   TextField,
//   IconButton,
//   Typography,
//   CircularProgress,
// } from "@mui/material";
// import { SignUpWrapper, EmailWrapper } from "./style";
// import email from "../../assets/images/email.png";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import Logo from "../../assets/logo/web_logo.svg";
// import { signUpUser, resendEmail } from "../../redux/auth";
// import SocialLogin from "../socialLogin/socialLogin";
// import { getCookie } from "esstart-components";

// export const Signup = () => {
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch<any>();
//   const productId = searchParams.get("productId");
//   const [showVerify, toggleVerify] = useState<boolean>(false);
//   const [loading, toggleLoading] = useState<boolean>(false);

//   const product: any = useSelector(
//     (state: any) => state.products.selectedProduct
//   );
//   useEffect(() => {
//     if (productId) {
//       dispatch(getProduct({ productId: productId }));
//     }
//   }, [searchParams, dispatch]);

//   const onHomeClick = () => {
//     const url: any =
//       process.env.REACT_APP_WEBSITE_URL_LIVE || "https://www.dev01esstart.com/";
//     window.location.href = url;
//   };

//   interface IErrorSingUp {
//     email?: string;
//     password?: string;
//   }

//   const signUpValidate: any = (values: any) => {
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//     const errors = {} as IErrorSingUp;
//     if (!values.email) {
//       errors.email = "Required";
//     } else if (!emailPattern.test(values.email)) {
//       errors.email = "Valid Email Required";
//     }

//     if (!values.password) {
//       errors.password = "Required";
//     } else if (!passwordPattern.test(values.password)) {
//       errors.password = "Please match the password criteria.";
//     }

//     return errors;
//   };

//   const {
//     values,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     errors,
//     setFieldError,
//     touched,
//   } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate: signUpValidate,
//     onSubmit: async (values: any) => {
//       const { email, password } = values;
//       if (email && password) {
//         toggleLoading(true);
//         const windowUrl = window.location.search;
//         const queryParams = new URLSearchParams(windowUrl);
//         const productId: string = queryParams.get("productId") || "";

//         const res = await dispatch(signUpUser({ email, password, productId }));
//         if (res.type === "auth/signup/fulfilled") {
//           toggleVerify(true);
//         }
//         if (res.type === "auth/signup/rejected") {
//           setFieldError("email", res.payload?.message);
//         }
//         toggleLoading(false);
//       }
//     },
//   });

//   // useEffect(()=>{
//   //   console.log(values);
//   // },[values])

//   const handleResetEmail = () => {
//     const userName = getCookie("username");
//     if (userName) {
//       dispatch(resendEmail({ userName }));
//     }
//   };

//   return (
//     <>
//       {!showVerify && (
//         <SignUpWrapper>
//           <Box className="signup_background">
//             <Container>
//               <div className="form__wrapper signup_page">
//                 <div className="content_part">
//                   <div className="signup_menu" onClick={onHomeClick}>
//                     <IconButton>
//                       <ArrowBackIosIcon />
//                     </IconButton>
//                     <p>Home</p>
//                   </div>
//                   <img src={Logo} alt="Logo" className="website_logo" />
//                   {!!product ? (
//                     <div className="product_box">
//                       <img src={product?.cardImgURL} alt="Card" />
//                       <h3>{product?.displayTitle}</h3>
//                       <p>{product?.shortDesc1}</p>
//                       <p>{product?.shortDesc2}</p>
//                     </div>
//                   ) : (
//                     <h5>
//                       Your One stop shop for<p>Unforgettable</p>Party
//                       Entertainment
//                     </h5>
//                   )}
//                 </div>
//                 <div className="signup_form">
//                   <Box className="page_banner">
//                     <h2 className="title">Register</h2>
//                     <p className="subtitle">
//                       Please Create an Account to Start Test Drive !
//                     </p>
//                   </Box>
//                   <form onSubmit={handleSubmit}>
//                     <div className="start">
//                       Already have an account ?
//                       <NavLink to="/login" className="start__login">
//                         LOGIN HERE
//                       </NavLink>
//                     </div>
//                     <div>
//                       <SocialLogin />
//                     </div>

//                     <div className="strike">
//                       <span> or </span>
//                     </div>

//                     <div>
//                       <p className="font">
//                         Please provide a valid email address to Start{" "}
//                       </p>
//                     </div>

//                     <div className="input-field">
//                       <span>Enter Email Address</span>
//                       <TextField
//                         fullWidth
//                         // label="Email ID"
//                         id="email"
//                         type="email"
//                         className="textField"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         error={!!errors.email && !!touched.email}
//                       />
//                     </div>

//                     {errors.email && touched.email ? (
//                       <div className="errorMsg">{errors.email as string}</div>
//                     ) : null}

//                     <div className="input-field">
//                       <span>Enter Password</span>
//                       <span
//                         style={{
//                           display: "block",
//                           font: "italic normal normal 14px/12px Montserrat",
//                           marginTop: "5px",
//                           color: "#707070",
//                         }}
//                       >
//                         (Recommended: 8 characters with Numbers, Caps and
//                         Letters)
//                       </span>

//                       <TextField
//                         fullWidth
//                         type="password"
//                         // label="Enter Password"
//                         id="password"
//                         className="textField"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         error={!!errors.password && !!touched.password}
//                       />
//                     </div>
//                     {errors.password && touched.password ? (
//                       <div className="errorMsg">
//                         {errors.password as string}
//                       </div>
//                     ) : null}
//                     <div className="button-container">
//                       {loading ? (
//                         <CircularProgress />
//                       ) : (
//                         <Button
//                           className="button-container__start remove_btn_hover"
//                           type="submit"
//                         >
//                           Start
//                         </Button>
//                       )}
//                     </div>
//                     <Typography
//                       marginTop="15px"
//                       fontSize="14px"
//                       className="privacy_policychange"
//                     >
//                       By clicking button above, you agree to our{" "}
//                       <a
//                         className="anchor"
//                         href="https://www.esstart.com/tos"
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         Terms of use
//                       </a>{" "}
//                       and{" "}
//                       <a
//                         href="https://www.esstart.com/p-policy"
//                         className="anchor"
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         Privacy Policies
//                       </a>
//                     </Typography>
//                   </form>
//                 </div>
//               </div>
//             </Container>
//           </Box>
//         </SignUpWrapper>
//       )}

//       {showVerify && (
//         <EmailWrapper>
//           <Box className="verify_background">
//             <Container>
//               <div className="form__wrapper verify_page">
//                 <div className="content_part">
//                   <div className="verify_menu" onClick={onHomeClick}>
//                     <IconButton>
//                       <ArrowBackIosIcon />
//                     </IconButton>
//                     <p>Home</p>
//                   </div>
//                   <img src={Logo} alt="Logo" className="website_logo" />
//                   {!!product ? (
//                     <div className="product_box">
//                       <img src={product?.cardImgURL} alt="Card" />
//                       <h3>{product?.displayTitle}</h3>
//                       <p>{product?.shortDesc1}</p>
//                       <p>{product?.shortDesc2}</p>
//                     </div>
//                   ) : (
//                     <h5>
//                       Your One stop shop for<p>Unforgettable</p>Party
//                       Entertainment
//                     </h5>
//                   )}
//                 </div>
//                 <Box className="verify_form" display="flex" alignItems="center">
//                   <Box padding={"20px 40px"}>
//                     <div className="image">
//                       <img src={email} alt="Verfiy" />
//                     </div>
//                     <span className="heading">Verify Your Email Address</span>
//                     <p className="first-para">
//                       You've entered <b> {values.email || ""} </b> as the email
//                       address. We have sent you an email, please verify your
//                       account
//                     </p>

//                     <span className="last-para">
//                       <p>
//                         Did not recieve the email ?{" "}
//                         <a
//                           href="/#"
//                           onClick={() => handleResetEmail()}
//                           className="anchor"
//                         >
//                           {" "}
//                           CLICK HERE
//                         </a>{" "}
//                         to resent{" "}
//                       </p>
//                       <p className="last-para-text">
//                         Have any Login Issues ? Contact Support Team
//                       </p>
//                     </span>
//                   </Box>
//                 </Box>
//               </div>
//             </Container>
//           </Box>
//         </EmailWrapper>
//       )}
//     </>

//     // <>
//     //   <SignupView productData={product || productId} closeBtn={false} signupPage={true} onHomeClick={onHomeClick} />
//     //   {/*  */}
//     // </>
//   );
// };
