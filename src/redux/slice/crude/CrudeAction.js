import CrudeService from "../../../service/Crude/CrudeService";
import { getDataSuccess, addCrudeData, deleteCrudeSuccess } from "./CrudeSlice";
import { dispatch, useDispatch } from "../../store";

export function GetCrude() {
  return async () => {
    try {
      const response = await CrudeService.getMethod();
      console.log(response, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      dispatch(getDataSuccess(response));
    } catch (error) {
      console.log("GetError");
    }
  };
}
// ================================================================================

export function addCrudData(data) {
  return async () => {
    // dispatch(startLoading());
    try {
      const response = await CrudeService.postMethod(data);
      dispatch(addCrudeData(response));
      dispatch(GetCrude(response));
    } catch (error) {
      console.log("PostError");
    }
  };
}

// ================================================================================

const deleteCrudeData = (data) => {
  return async () => {
    try {
      const response = await CrudeService.deleteMethod(data);
      dispatch(deleteCrudeSuccess(response.data));
    } catch (error) {
      console.log("Deleteerror");
    }
  };
};

// ================================================================================

const CrudeAction = {
  GetCrude,
  addCrudData,
  deleteCrudeData,
};

export default CrudeAction;
