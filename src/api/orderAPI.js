import axios from "../../axios";
import Cookies from "js-cookie";
const token = Cookies.get('accessToken'); // Get the token from your cookie
const headers = {
    Authorization: `Bearer ${token}`,
};

const orderProduct = (body) => {
    return axios.post('/api/order-product', body)
}

const getLastestOrder = (limit) => {
    return axios.get(`/api/get-lastest-order?limit=${limit}`)
}

const getAllOrder = () => {
    return axios.get('/api/get-all-order')
}

const getAllOrderDelivered = () => {
    return axios.get('/api/get-all-order-delivered')
}

const payOrder = (id) => {
    return axios.put('/api/pay-order', id, { headers })
}

const deliverProduct = (id) => {
    return axios.put('/api/deliver-product', id, { headers })
}




export { orderProduct, getAllOrder, payOrder, deliverProduct, getAllOrderDelivered, getLastestOrder }