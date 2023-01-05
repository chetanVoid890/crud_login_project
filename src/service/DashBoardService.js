import axios from "axios";
const initialDetails = async () => {
  let resp = null;
  try {
    resp = await axios.get("https://fakestoreapi.com/products");
    console.log(resp);
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export default initialDetails;
