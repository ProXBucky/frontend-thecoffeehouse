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




export { fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin }