import axios from "../../axios";

const fetchAllAdmin = () => {
    return axios.get('/api/get-all-admin')
}

const fetchAllAdminNotApproved = () => {
    return axios.get('/api/get-all-admin-not-approved')
}

const approveAdminById = (id) => {
    return axios.put(`/api/approve-admin-by-id?id=${id}`)
}

const fetchDataAllcodes = (type) => {
    return axios.get(`/api/get-allcode-by-type?type=${type}`)
}

const fetchAllProductByCategory = (category, limit) => {
    return axios.get(`/api/get-all-product-by-category?category=${category}&limit=${limit}`)
}

const fetchAllStoreByCity = (city) => {
    return axios.get(`/api/get-all-store-by-city?city=${city}`)
}

const fetchDetailProductById = (id) => {
    return axios.get(`/api/get-detail-product-by-id?id=${id}`)
}

const fetchDetailStoreById = (id) => {
    return axios.get(`/api/get-detail-store-by-id?id=${id}`)
}

const fetchBestSeller = (limit) => {
    return axios.get(`/api/get-best-seller?limit=${limit}`,)
}

export {
    fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin, fetchAllStoreByCity, fetchDetailProductById, fetchDetailStoreById,
    fetchAllAdminNotApproved, approveAdminById, fetchBestSeller
}