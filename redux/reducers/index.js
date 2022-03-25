import { combineReducers } from 'redux'
import product from './productList'
import color from './color'
import size from './size'
import buttons from './buttons'

const rootReducer = combineReducers({
    product,
    color,
    size,
    buttons
})

export default rootReducer