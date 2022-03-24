const initialState = {
  token: null,
  userData: {},
  isLoading: false,
  isError: false,
  errorMsg: ''
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REGISTER_PENDING': {
      state.isLoading = true
      return { ...state }
    }
    case 'AUTH_REGISTER_FULFILLED': {
      const { data } = action.payload
      state.isLoading = false
      state.message = data.message
      state.isError = false
      return { state }
    }
    case 'AUTH_REGISTER_REJECTED': {
      const { data } = action.payload.response
      state.isLoading = false
      state.isError = true
      state.errMessage = data.message
    }
    case 'AUTH_LOGIN_PENDING': {
      state.isError = false;
      state.isLoading = true;
      state.token = null;
      state.errMessage = null;
      return { ...state }
    }
    case 'AUTH_LOGIN_FULFILLED': {
      const { data } = action.payload
      state.isError = false;
      state.isLoading = false;
      state.errMessage = null;
      state.token = data.results.token
      window.localStorage.setItem('token', data.results.token);
      return { ...state }
    }
    case 'AUTH_LOGIN_REJECTED': {
      const { message } = action.payload.response.data;
      console.log(message)
      state.isLoading = false;
      state.token = null;
      state.isError = true;
      return { ...state }
    }
    case 'AUTH_FORGOT_PASSWORD_PENDING': {
      state.isLoading = true
      return state
    }
    case 'AUTH_FORGOT_PASSWORD_FULFILLED': {
      const { data } = action.payload
      state.isLoading = false
      state.isError = false
      state.errorMsg = data.message
      return { ...state }
    }
    case 'AUTH_FORGOT_PASSWORD_REJECTED': {
      const { message } = action.payload.response.data
      console.log(message)
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return { ...state }
    }
    case 'AUTH_CHANGE_PASSWORD_PENDING': {
      state.isLoading = true
      return state
    }
    case 'AUTH_CHANGE_PASSWORD_FULFILLED': {
      const { data } = action.payload
      console.log(data.message)
      state.isLoading = false
      state.isError = false
      state.errorMsg = data.message
      return { ...state }
    }
    case 'AUTH_CHANGE_PASSWORD_REJECTED': {
      const { message } = action.payload.response.data
      console.log(message)
      state.isLoading = false
      state.isError = true
      state.errorMsg = message
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default auth;
