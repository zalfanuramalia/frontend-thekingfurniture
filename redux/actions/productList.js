import http from '../../helpers/http'

export const getProduct = async (dispatch) => {
    try {
        dispatch({type: 'TOGGLE_LOADING'})
        const {data} = await http().get('/product')
        dispatch({type: 'GET_PRODUCT', payload: data.result})
        dispatch({type: 'TOGGLE_LOADING'})
    } catch (e){
        console.log(e)
    }
}