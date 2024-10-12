import axios from "../../axios";
const API_URL = import.meta.env.VITE_BACKEND_PORT;

const orderProduct = (body) => {
    return axios.post('/order', body)
}


const getLastestOrder = async (limit, token) => {
    try {
        const response = await axios.get(`${API_URL}/order/lastest?limit=${limit}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const getAllOrder = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/order/all`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getAllOrderDelivered = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/order/all-delivered`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const deleteOrder = async (orderId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/order/${orderId}`,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const payOrder = async (orderId, token) => {
    try {
        const response = await axios.put(`${API_URL}/order/pay`,
            { orderId: orderId },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


const deliverProduct = async (orderId, token) => {
    try {
        const response = await axios.put(`${API_URL}/order/delivery`,
            { orderId: orderId },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};




export { orderProduct, getAllOrder, payOrder, deliverProduct, getAllOrderDelivered, getLastestOrder, deleteOrder }