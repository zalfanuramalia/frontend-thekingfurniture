const initialState = {
  data: []

}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      const data = [...action.payload]
      return { ...state, data }
    }
    default: {
      return { ...state }
    }
  }
}

export default auth