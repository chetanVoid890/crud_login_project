import CrudeService from "../../../service/Crude/CrudeService";
import {
  getDataSuccess,
  addCrudeDataSuccess,
  editCrudeDataSuccess,
  deleteCrudedataSuccess,
  removeStatus,
} from "./CrudeSlice";
import { dispatch } from "../../store";

// ================================================================================

export function GetCrude() {
  return async () => {
    try {
      const response = await CrudeService.getMethod();
      dispatch(getDataSuccess(response));
    } catch (error) {
      console.log("GetError");
    }
  };
}
// ================================================================================

export function addCrudData(data) {
  console.log("editdataaction", data);
  return async () => {
    try {
      const response = await CrudeService.postMethod(data);
      dispatch(addCrudeDataSuccess(response));
      dispatch(GetCrude());
    } catch (error) {
      console.log("PostError");
    }
  };
}

// ================================================================================

export function editCrudeData(moduleId, data) {
  return async () => {
    try {
      const response = await CrudeService.putMethod(moduleId, data);
      dispatch(editCrudeDataSuccess(response));
      dispatch(GetCrude());
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
      dispatch(GetCrude());
    } catch (error) {
      console.log("Deleteerror");
    }
  };
}

// ================================================================================

export function removeStatuss() {
  return async () => {
    dispatch(removeStatus());
  };
}

// ================================================================================

const CrudeAction = {
  GetCrude,
  addCrudData,
  editCrudeData,
  deleteCrudeData,
  removeStatuss,
};

export default CrudeAction;
