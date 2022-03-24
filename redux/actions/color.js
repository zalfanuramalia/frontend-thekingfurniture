import http from '../../helpers/http'

export const getColors = async (dispatch) => {
    dispatch({type: 'TOGGLE_LOADING'})
    const {data} = await http().get('/color')
    dispatch({type: 'GET_COLOR', payload: data.result})
    dispatch({type: 'TOGGLE_LOADING'})
}