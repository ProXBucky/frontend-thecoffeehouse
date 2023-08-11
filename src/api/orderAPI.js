import axios from "../../axios";

const orderProduct = (body) => {
    return axios.post('/api/order-product', body)
}

const getAllOrder = () => {
    return axios.get('/api/get-all-order')
}

const updateStatusPayment = (id) => {
    return axios.put('/api/pay-order', id)
}

export { orderProduct, getAllOrder, updateStatusPayment }