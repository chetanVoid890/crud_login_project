import axios from "axios";
import { useEffect } from "react";
import { dispatch } from "../../redux/store";

const getMethod = async () => {
  let resp = null;
  try {
    resp = await axios.get("http://localhost:3000/product");
    // console.log("getapi", resp);
    // console.log("responseStatus==========", resp.data, resp.status);
    return resp;
  } catch (err) {
    console.log("helloGet");
  }
};

const postMethod = async (data) => {
  console.log("editdataapi", data);

  let resp = null;
  try {
    resp = await axios.post("http://localhost:3000/product", data);
    console.log("editdataapiafter", resp);
    return resp;
  } catch (err) {
    console.log("helloPost");
  }
};

const putMethod = async (moduleId, data) => {
  let resp = null;
  try {
    resp = await axios.put(`http://localhost:3000/product/${moduleId}`, data);
    console.log("putMethodresponse", resp);
    console.log("putMethodresponse==========", resp.status);

    return resp;
  } catch (err) {
    console.log("helloPut");
  }
};

const deleteMethod = async (listId) => {
  let resp = null;
  resp = await axios.delete(`http://localhost:3000/product/${listId}`);
  return resp;
};

const CrudeService = {
  getMethod,
  postMethod,
  putMethod,
  deleteMethod,
};

export default CrudeService;
