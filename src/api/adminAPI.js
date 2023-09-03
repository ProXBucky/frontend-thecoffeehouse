import axios from "../../axios";


const getAdminById = (id) => {
    return axios.get(`/api/get-admin-by-id?id=${id}`)
}

const deleteAdmin = (id) => {
    return axios.delete(`/api/delete-admin?id=${id}`,)
}

// const deleteAdmin = (id) => {
//     return axios.delete(`/api/delete-admin?id=${id}`, { headers })
// }

const updateAdminData = (body) => {
    return axios.put('/api/update-admin-data', body)
}

const createNewProduct = (body) => {
    return axios.post('/api/create-new-product', body)
}

// const deleteProduct = (id) => {
//     return axios.delete(`/api/delete-product?id=${id}`, { headers })
// }

const updateProductData = (body) => {
    return axios.put('/api/update-product-data', body)
}

const createNewStore = (body) => {
    return axios.post('/api/create-new-store', body)
}

const uploadMultiImageStore = (body) => {
    return axios.post('/api/upload-multi-image-store', body)
}

// const deleteStore = (id) => {
//     return axios.delete(`/api/delete-store?id=${id}`, { headers })
// }

const updateStoreData = (body) => {
    return axios.put('/api/update-store-data', body)
}

const approveAdminById = (id) => {
    return axios.put(`/api/approve-admin-by-id?id=${id}`)
}

const createNewManager = (body) => {
    return axios.post('/api/create-new-manager', body)
}



export {
    deleteAdmin, updateAdminData, getAdminById, createNewProduct, updateProductData, createNewStore,
    uploadMultiImageStore, updateStoreData, approveAdminById, createNewManager
}

// getAdminByEmail deleteProduct deleteStore