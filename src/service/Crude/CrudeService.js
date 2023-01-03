import axios from "axios";

const getMethod = async () => {
  let resp = null;
  try {
    resp = await axios.get(
      "https://crudcrud.com/api/bd28c8ad25e540b5be51e5a278b06fa8/data"
    );
    console.log("getapi", resp);
    return resp;
  } catch (err) {
    console.log(err);
  }
};

const postMethod = async (data) => {
  let resp = null;
  try {
    resp = await axios.post(
      "https://crudcrud.com/api/bd28c8ad25e540b5be51e5a278b06fa8/data",
      data
    );

    console.log("postapi", resp);
    return resp;
  } catch (err) {
    console.log(err);
  }
};

const deleteMethod = async (listId) => {
  const response = await axios.delete(
    `https://crudcrud.com/api/bd28c8ad25e540b5be51e5a278b06fa8/data/${listId}`
  );
  return response;
};

const CrudeService = {
  deleteMethod,
  postMethod,
  getMethod,
};

export default CrudeService;
