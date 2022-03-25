import { combineReducers } from 'redux'
import auth from "./auth";
import productDetail from "./productDetail";
import counter from "./counter";
import pages from "./pages";
import product from './productList'
import color from './color'
import size from './size'
import buttons from './buttons'

const rootReducers = combineReducers({
  auth,
  productDetail,
  counter,
  pages,
  product,
  color,
  size,
  buttons
})
export default rootReducer
