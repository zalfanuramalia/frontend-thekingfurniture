const initialState = {
<<<<<<< HEAD
  isLoading: false
}

const pages = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING': {
      let { isLoading } = state
      isLoading = !isLoading
      state.isLoading = true
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
=======
    isLoading: false
}

const pages = (state = initialState, action) => {
    switch (action.type) {        
        case 'TOGGLE_LOADING': {
            let {isLoading} = state
            isLoading = !isLoading
            state.isLoading = true
            return {...state }
        }
        default: {
            return {...state }
        }
    }
>>>>>>> 6117b64bd840cbf915f51672c7e6eeb298517fe5
}

export default pages