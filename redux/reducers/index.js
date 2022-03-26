import { combineReducers } from 'redux'
import auth from "./auth";
import product from './productList'
import color from './color'
import size from './size'
import buttons from './buttons'
import users from './users';
import productSeller from './productSeller';
import pages from './pages'

const rootReducer = combineReducers({
    auth,
    product,
    color,
    size,
    buttons,
    users,
    productSeller,
    pages
})

export default rootReducer
