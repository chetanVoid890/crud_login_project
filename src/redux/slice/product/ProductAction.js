import initialDetails from "../../../service/DashBoardService";
import { getProductSuccess } from "./ProductSlice";
import { dispatch } from "../../store";

function GetProduct() {
  return async () => {
    try {
      const response = await initialDetails();
      console.log(response, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      dispatch(getProductSuccess(response));
    } catch (error) {
      console.log("hello");
    }
  };
}

export default GetProduct;
