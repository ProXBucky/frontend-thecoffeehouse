import axios from "../../axios";

const fetchAllAdmin = (body) => {
    return axios.get('/api/get-all-admin', body)
}

const fetchDataAllcodes = (type) => {
    return axios.get(`/api/get-allcode-by-type?type=${type}`)
}

const fetchAllProductByCategory = (category) => {
    return axios.get(`/api/get-all-product-by-category?category=${category}`)
}

const fetchAllStoreByCity = (city) => {
    return axios.get(`/api/get-all-store-by-city?city=${city}`)
}

const fetchDetailProductById = (id) => {
    return axios.get(`/api/get-detail-product-by-id?id=${id}`)
}




export { fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin, fetchAllStoreByCity, fetchDetailProductById }