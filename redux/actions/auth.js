import http from '../../helpers/http'
import qs from 'qs'

export const login = (emailLogin, passwordLogin) => {
  const dataLogin = { 'email': emailLogin, 'password': passwordLogin }

  return {
    type: 'AUTH_LOGIN',
    payload: http().post('/auth/login', qs.stringify(dataLogin))
  }
}

export const register = (emailRegis, passwordRegis, id_role) => {
  const dataRegis = { 'email': emailRegis, 'password': passwordRegis, 'id_role': id_role }

  return {
    type: 'AUTH_REGISTER',
    payload: http().post('/auth/register', qs.stringify(dataRegis))
  }
}

export const forgot = (email) => {
  const dataForgot = { 'email': email }

  return {
    type: 'AUTH_FORGOT_PASSWORD',
    payload: http().post('auth/forgot-password?callback_url=http://localhost:3000', qs.stringify(dataForgot))
  }
}

export const newPassword = (data) => {
  const params = new URLSearchParams()
  params.append('otp', data.otp)
  params.append('newPassword', data.newPassword)
  params.append('confirmPassword', data.confirmPassword)

  return ({
    type: 'AUTH_CHANGE_PASSWORD',
    payload: http().post('auth/forgot-password', params)
  })
}
