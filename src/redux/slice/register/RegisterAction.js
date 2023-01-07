import { LoginSuccess, logInFail } from "./RegisterSlice";
import Cookies from "js-cookie";
import { dispatch } from "../../store";

function LoginUser(args) {
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
