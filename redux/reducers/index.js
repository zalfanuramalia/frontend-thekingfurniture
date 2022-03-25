import { combineReducers } from 'redux'
import auth from "./auth";
import product from './productList'
import color from './color'
import size from './size'
import buttons from './buttons'

const rootReducer = combineReducers({
    auth,
    product,
    color,
    size,
    buttons
})

export default rootReducer
