import axios from "../../axios";

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

const deleteOrder = (id) => {
    return axios.delete(`/api/delete-order?id=${id}`)
}

const payOrder = (id) => {
    return axios.put('/api/pay-order', id)
}


const deliverProduct = (id) => {
    return axios.put('/api/deliver-product', id)
}




export { orderProduct, getAllOrder, payOrder, deliverProduct, getAllOrderDelivered, getLastestOrder, deleteOrder }