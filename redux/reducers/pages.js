const initialState = {
    isLoading: false
}

const pages = (state = initialState, action) => {
    switch (action.type) {        
        case 'TOGGLE_LOADING': {
            let {isLoading} = state
            isLoading = !isLoading
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default pages