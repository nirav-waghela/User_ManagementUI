export const VALIDATE_USER = 'VALIDATE_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'
const baseURL = 'http://localhost:5000'

const addHeader = () => {
    let token = JSON.parse(localStorage.getItem('token'))
    console.log(`Bearer ${token}`)
    return {
        'Authorization': `Bearer ${token}`
    }
}


export const validateUser = (user) => {
    return {
        type: VALIDATE_USER,
        promise: client => client.post(`${baseURL}/login`, { ...user })
    }
}

export const registerUser = (payload) => {
    return {
        type: REGISTER_USER,
        promise: client => client.post(`${baseURL}/signup`, { ...payload })
    }
}

export const addProduct = (productDetails) => {
    console.log({ header: addHeader() }, "in action")
    return {
        type: ADD_PRODUCT,
        promise: client => client.post(`${baseURL}/createProduct`, { ...productDetails }, { headers: addHeader() })
    }
}

export const updateProduct = (productDetails) => {
    return {
        type: UPDATE_PRODUCT,
        promise: client => client.post(`${baseURL}/updateProduct`, { ...productDetails }, { headers: addHeader() })
    }
}

export const getAllProducts = () => {
    return {
        type: GET_PRODUCTS,
        promise: client => client.get(`${baseURL}/allProducts`, { headers: addHeader() })
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        data: { id },
        promise: client => client.post(`${baseURL}/delete`, { id }, { headers: addHeader() })
    }
}