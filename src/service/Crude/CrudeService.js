import axios from "axios";

const getMethod = async () => {
  let resp = null;
  try {
    resp = await axios.get(
      "https://crudcrud.com/api/e78e609927364d55afec771fb882cc10/data"
    );
    // console.log("getapi", resp);
    // console.log("responseStatus==========", resp.data, resp.status);
    return resp;
  } catch (err) {
    console.log("helloGet");
  }
};

const postMethod = async (data) => {
  let resp = null;
  try {
    resp = await axios.post(
      "https://crudcrud.com/api/e78e609927364d55afec771fb882cc10/data",
      data
    );

    console.log("postapi", resp);
    return resp;
  } catch (err) {
    console.log("helloPost");
  }
};

const putMethod = async (moduleId, data) => {
  let resp = null;
  try {
    resp = await axios.put(
      `https://crudcrud.com/api/e78e609927364d55afec771fb882cc10/data/${moduleId}`,
      data
    );
    return resp;
  } catch (err) {
    console.log("helloPut");
  }
};

const deleteMethod = async (listId) => {
  let resp = null;
  resp = await axios.delete(
    `https://crudcrud.com/api/e78e609927364d55afec771fb882cc10/data/${listId}`
  );
  return resp;
};

const CrudeService = {
  getMethod,
  postMethod,
  putMethod,
  deleteMethod,
};

export default CrudeService;
