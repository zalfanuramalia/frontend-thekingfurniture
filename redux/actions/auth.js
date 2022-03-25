import http from '../../helpers/http'
import qs from 'qs'

export const login = (emailLogin, passwordLogin) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_CLEAR_STATE' })
      const dataLogin = { 'email': emailLogin, 'password': passwordLogin }
      const { data } = await http().post('/auth/login', qs.stringify(dataLogin))
      dispatch({
        type: 'AUTH_LOGIN',
        payload: {
          token: data.result,
          message: data.message
        }
      })
    } catch (e) {
      dispatch({
        type: 'AUTH_ERR',
        payload: e.response.data.message
      })
    }
  }
}

export const register = (emailRegis, passwordRegis, id_role) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_CLEAR_STATE' })
      const dataRegister = { 'email': emailRegis, 'password': passwordRegis, 'id_role': id_role }
      const { data } = await http().post('/auth/register', qs.stringify(dataRegister))
      dispatch({
        type: 'AUTH_REGISTER',
        payload: {
          message: data.message
        }
      })
    } catch (e) {
      dispatch({
        type: 'AUTH_ERR',
        payload: e.response.data.message
      })
    }
  }
}

export const forgot = (email) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_CLEAR_STATE' })
      const dataForgot = { 'email': email }
      const { data } = await http().post('/auth/forgot-password?callbackUrl=http://localhost:3000 ', qs.stringify(dataForgot))
      dispatch({
        type: 'AUTH_FORGOT',
        payload: {
          message: data.message
        }
      })
    } catch (e) {
      dispatch({
        type: 'AUTH_ERR',
        payload: e.response.data.message
      })
    }
  }
}

export const changePassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: 'AUTH_CLEAR_STATE' })
      const params = new URLSearchParams()
      params.append('code', data.otp)
      params.append('password', data.password)
      params.append('confirmPassword', data.confirmPassword)
      const { data: dataForgot } = await http().post('/auth/forgot-password', params)
      dispatch({
        type: 'AUTH_CHANGE_PASSWORD',
        payload: {
          message: dataForgot.message
        }
      })
    } catch (e) {
      dispatch({
        type: 'AUTH_ERR',
        payload: e.response.data.message
      })
    }
  }
}

// export const forgot = (email) => {
//   const dataForgot = { 'email': email }

//   return {
//     type: 'AUTH_FORGOT_PASSWORD',
//     // payload: http().post('auth/forgot-password?callback_url=http://localhost:3000', qs.stringify(dataForgot))
//   }
// }

// export const newPassword = (data) => {
//   const params = new URLSearchParams()
//   params.append('otp', data.otp)
//   params.append('newPassword', data.newPassword)
//   params.append('confirmPassword', data.confirmPassword)

//   return ({
//     type: 'AUTH_CHANGE_PASSWORD',
//     payload: http().post('auth/forgot-password', params)
//   })
// }
