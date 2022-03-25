import { combineReducers } from 'redux'
import product from './productList'
import color from './color'
import size from './size'

const rootReducer = combineReducers({
    product,
    color,
    size
})

export default rootReducer