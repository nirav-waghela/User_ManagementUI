export const VALIDATE_USER = 'VALIDATE_USER'
export const REGISTER_USER = 'REGISTER_USER'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_USERS = 'GET_USERS'
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const GET_GROUPS = 'GET_GROUPS'
export const CHANGE_GROUP_STATUS = 'CHANGE_GROUP_STATUS'
export const CREATE_GROUP = 'CREATE_GROUP'
export const DELETE_GROUP ='DELETE_GROUP'
export const DELETE_USER = 'DELETE_USER'

const baseURL = 'https://sharebe-370703.uc.r.appspot.com'

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

export const getAllUsers = (data) => {
    return {
        type: GET_USERS,
        data:{data},
        promise:client => client.get(`${baseURL}/getAllUsers`, { headers: addHeader() })
    }
}

export const getAllGroups = (data) => {
    return {
        type: GET_GROUPS,
        data:{data},
        promise:client => client.post(`${baseURL}/getAllGroups`,{data}, { headers: addHeader() })
    }
}

export const changeGroupStatus = (data) => {
    return{
        type:CHANGE_GROUP_STATUS,
        data:{data},
        promise:client => client.post(`${baseURL}/changeGroupStatus`, {data}, { headers: addHeader() })
    }
}

export const changeStatus = (data) =>{
    return {
        type : CHANGE_STATUS,
        data:{data},
        promise:client => client.post(`${baseURL}/changeStatus`, {data}, { headers: addHeader() })
    }
}

export const createGroup = (data) =>{
    return {
        type : CREATE_GROUP,
        data:{data},
        promise:client => client.post(`${baseURL}/createGroup`, {data}, { headers: addHeader() })
    }
}

export const deleteGroup = (id) =>{
    return {
        type:DELETE_GROUP,
        data:{id},
        promise:client => client.post(`${baseURL}/deleteGroup`, {id}, { headers: addHeader() })
    }
}

export const deleteUser = (id) =>{
    return {
        type:DELETE_USER,
        data:{id},
        promise:client => client.post(`${baseURL}/deleteUser`, {id}, { headers: addHeader() })
    }
}