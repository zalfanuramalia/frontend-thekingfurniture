import { combineReducers } from 'redux'
import auth from "./auth";
import product from './productList'
import color from './color'
import size from './size'
import buttons from './buttons'
import users from './users';
import productSeller from './productSeller';
import pages from './pages'
import category from './category';

const rootReducer = combineReducers({
    auth,
    product,
    color,
    size,
    buttons,
    users,
    productSeller,
    pages,
    category
})

export default rootReducer
