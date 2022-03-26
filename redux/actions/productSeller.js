import http from '../../helpers/http'

export const getProductSeller = (seller_id) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http().get(`/product/seller/${seller_id}`)
            dispatch({type: 'GET_PRODUCT_SELLER', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    }
}

export const deleteProductSeller = (token, id) => {
    return async (dispatch) => {
        try {
            dispatch({type: 'TOGGLE_LOADING'})
            const {data} = await http(token).patch(`/product/delete/${id}`)
            dispatch({type: 'DELETE_PRODUCT_SELLER', payload: data.result})
            dispatch({type: 'TOGGLE_LOADING'})
        } catch (e){
            console.log(e)
        }
    }
}