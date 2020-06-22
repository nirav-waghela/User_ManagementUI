import {
    VALIDATE_USER,
    REGISTER_USER,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS
} from '../actions/index'



export function Root(state = {}, action) {
    switch (action.type) {
        case `${VALIDATE_USER}_REQUEST`:
            return {
                ...state
            }
        case `${VALIDATE_USER}`:
            return {
                ...state            
            }
        case `${VALIDATE_USER}_FAILURE`:
            return {
                ...state
            }

        case `${REGISTER_USER}_REQUEST`:
            return {
                ...state
            }
        case `${REGISTER_USER}`:
            return {
                ...state
            }
        case `${REGISTER_USER}_FAILURE`:
            return {
                ...state
            }
        case `${ADD_PRODUCT}_REQUEST`:
            return {
                ...state
            }
        case `${ADD_PRODUCT}`:
            return {
                ...state
            }
        case `${ADD_PRODUCT}_FAILURE`:
            return {
                ...state
            }
        case `${UPDATE_PRODUCT}_REQUEST`:
            return {
                ...state
            }
        case `${UPDATE_PRODUCT}`:
            return {
                ...state
            }
        case `${UPDATE_PRODUCT}_FAILURE`:
            return {
                ...state
            }
        case `${DELETE_PRODUCT}_REQUEST`:
            return {
                ...state
            }
        case `${DELETE_PRODUCT}`:
            let filterProduct 
            if(action.data && action.data.id){
                filterProduct = state.products.filter(
                     product => product._id !== action.data.id
                )
            }
            return {
                ...state,
                products: action.data && action.data.id ? filterProduct : []
            }
        case `${DELETE_PRODUCT}_FAILURE`:
            return {
                ...state
            }
        case `${GET_PRODUCTS}_REQUEST`:
            return {
                ...state
            }
        case `${GET_PRODUCTS}`:
            return {
                ...state,
                products:
                action.payload && action.payload.data ? action.payload.data : []
            }
        case `${GET_PRODUCTS}_FAILURE`:
            return {
                ...state
            }
        default:
            return state
    }
}