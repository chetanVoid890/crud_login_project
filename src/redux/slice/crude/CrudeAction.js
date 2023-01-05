import CrudeService from "../../../service/Crude/CrudeService";
import {
  getDataSuccess,
  addCrudeDataSuccess,
  editCrudeDataSuccess,
  deleteCrudedataSuccess,
} from "./CrudeSlice";
import { dispatch } from "../../store";

// ================================================================================

export function GetCrude() {
  return async () => {
    try {
      const response = await CrudeService.getMethod();
      // console.log(response, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      dispatch(getDataSuccess(response));
    } catch (error) {
      console.log("GetError");
    }
  };
}
// ================================================================================

export const addCrudData = async (data) => {
  console.log("editdataaction", data);
  try {
    const response = await CrudeService.postMethod(data);
    dispatch(addCrudeDataSuccess(response));
    dispatch(GetCrude());
    return response;
  } catch (error) {
    console.log("PostError");
  }
};

// ================================================================================

export function editCrudeData(moduleId, data) {
  // console.log("editdata", data);
  // console.log("currentModal._id", moduleId);
  return async () => {
    try {
      const response = await CrudeService.putMethod(moduleId, data);
      // console.log("editResponse--=======", response);
      dispatch(editCrudeDataSuccess(response));
    } catch (error) {
      console.log("editError");
    }
  };
}

// ================================================================================

export function deleteCrudeData(data) {
  return async () => {
    try {
      const response = await CrudeService.deleteMethod(data);
      dispatch(deleteCrudedataSuccess(response.data));
    } catch (error) {
      console.log("Deleteerror");
    }
  };
}

// ================================================================================

const CrudeAction = {
  GetCrude,
  addCrudData,
  editCrudeData,
  deleteCrudeData,
};

export default CrudeAction;
