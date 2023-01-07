import axios from "axios";

const getMethod = async () => {
  let resp = null;
  try {
    resp = await axios.get("http://localhost:3000/product");
    return resp;
  } catch (err) {
    console.log("helloGet");
  }
};

const postMethod = async (data) => {
  let resp = null;
  try {
    resp = await axios.post("http://localhost:3000/product", data);
    return resp;
  } catch (err) {
    console.log("helloPost");
  }
};

const putMethod = async (moduleId, data) => {
  let resp = null;
  try {
    resp = await axios.put(`http://localhost:3000/product/${moduleId}`, data);
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
