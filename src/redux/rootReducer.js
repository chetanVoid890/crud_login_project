import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from "./slice/product/ProductSlice";
import authenticationReducer from "./slice/register/RegisterSlice";
import crudeReducer from "./slice/crude/CrudeSlice";
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  product: productReducer,
  authentication: authenticationReducer,
  crude: crudeReducer,
});

export { rootPersistConfig, rootReducer };
