import axios from "../../axios";
import Cookies from "js-cookie";
const token = Cookies.get('accessToken'); // Get the token from your cookie
const headers = {
    Authorization: `Bearer ${token}`,
};

const getAdminByEmail = (email) => {
    return axios.get(`/api/get-admin-by-email?email=${email}`)
}

const getAdminById = (id) => {
    return axios.get(`/api/get-admin-by-id?id=${id}`)
}

const deleteAdmin = (id) => {
    return axios.delete(`/api/delete-admin?id=${id}`, { headers })
}

const updateAdminData = (body) => {
    return axios.put('/api/update-admin-data', body, { headers })
}

const createNewProduct = (body) => {
    return axios.post('/api/create-new-product', body, { headers })
}

const deleteProduct = (id) => {
    return axios.delete(`/api/delete-product?id=${id}`, { headers })
}

const updateProductData = (body) => {
    return axios.put('/api/update-product-data', body, { headers })
}

const createNewStore = (body) => {
    return axios.post('/api/create-new-store', body, { headers })
}

const uploadMultiImageStore = (body) => {
    return axios.post('/api/upload-multi-image-store', body, { headers })
}

const deleteStore = (id) => {
    return axios.delete(`/api/delete-store?id=${id}`, { headers })
}

const updateStoreData = (body) => {
    return axios.put('/api/update-store-data', body, { headers })
}

const approveAdminById = (id) => {
    return axios.put(`/api/approve-admin-by-id?id=${id}`, { headers })
}



export {
    deleteAdmin, updateAdminData, getAdminById, getAdminByEmail, createNewProduct, deleteProduct, updateProductData, createNewStore,
    uploadMultiImageStore, deleteStore, updateStoreData, approveAdminById
}