import { combineReducers } from 'redux'
import product from './productList'
import color from './color'

const rootReducer = combineReducers({
    product,
    color
})

export default rootReducer