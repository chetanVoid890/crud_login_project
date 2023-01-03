import React from "react";
import { LoginSuccess, logInFail } from "./RegisterSlice";
import Cookies from "js-cookie";
import { dispatch } from "../../store";

function LoginUser(args) {
  console.log(args, "--------------!!!!!!!");
  const { email, password } = args;
  if (email === "chetan@gmail.com" && password === "12345678") {
    Cookies.set("user", email);
    const ans = dispatch(LoginSuccess(args));
    return ans;
  } else {
    const fail = dispatch(logInFail());
    return fail;
  }
}

export default LoginUser;

// export const signInUser = createAsyncThunk(
//   'auth/signin',
//   async (args: SignInPayload, { rejectWithValue }) => {
//     const { email, password } = args;
//     try {
//       Cookies.set('username', email);
//       const res = await axiosAuth.get('/auth-tokens', {
//         auth: {
//           username: email,
//           password: password,
//         },
//       });
//       if (res.status === 200) {
//         SetAuthCookie(res?.data?.data);
//       }
//       return res.data;
//     } catch (err: any) {
//       throw rejectWithValue(err.response.data);
//     }
//   }
// );
