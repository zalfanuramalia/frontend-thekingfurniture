const dataProductSeller = {
    datas: []
}

const productSeller = (state = dataProductSeller, action) => {
    switch (action.type) {        
        case 'GET_PRODUCT_SELLER': {
            const data = action.payload
            state.datas = data
            return {...state }
        }
        case 'DELETE_PRODUCT_SELLER': {
            const data = action.payload
            state.datas = data
            return {...state }
        }
        case 'ADD_PRODUCT_SELLER': {
            const data = action.payload
            state.datas = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default productSeller