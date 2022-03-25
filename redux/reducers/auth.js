const initialState = {
  token: null,
  isErr: false,
  errMsg: '',
  successMsg: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      const newState = {
        successMsg: action.payload.message,
        token: action.payload.token
      }
      window.localStorage.setItem('token', newState.token)
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_REGISTER': {
      const newState = {
        successMsg: action.payload.message
      }
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_FORGOT': {
      const newState = {
        successMsg: action.payload.message
      }
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_CHANGE_PASSWORD': {
      const newState = {
        successMsg: action.payload.message
      }
      return {
        ...state,
        ...newState
      }
    }
    case 'AUTH_ERR': {
      return {
        ...state,
        isErr: true,
        errMsg: action.payload
      }
    }
    case 'AUTH_CLEAR_STATE': {
      return initialState
    }
    default: {
      return { ...state }
    }
  }
}

export default auth