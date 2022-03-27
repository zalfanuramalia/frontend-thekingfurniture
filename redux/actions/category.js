import http from '../../helpers/http'

export const getCategory = async (dispatch) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const {data} = await http().get('/category')
        dispatch({type: 'GET_CATEGORY', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e) {
        console.log(e)
    }
}

export const getCategoryTotal = (id_category) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http().get(`/product-category/${id_category}`)
            dispatch({type: 'GET_CATEGORY_TOTAL', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e) {
            console.log(e)
        }
    }
}