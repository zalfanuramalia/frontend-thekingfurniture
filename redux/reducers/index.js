import { combineReducers } from "redux";
import auth from "./auth";
import productDetail from "./productDetail";
import counter from "./counter";
import pages from "./pages";

const rootReducers = combineReducers({
  auth,
  productDetail,
  counter,
  pages
})

export default rootReducers