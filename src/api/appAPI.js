import axios from "../../axios";
const API_URL = import.meta.env.VITE_BACKEND_PORT;


const fetchAllAdmin = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/admin/all`,
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


const fetchAllAdminNotApproved = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/admin/allNotApproved`,
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

const fetchDataAllcodes = (type) => {
    return axios.get(`${API_URL}/app/type/${type}`)
}

const fetchAllProductByCategory = (category, page, itemsPerPage, limit) => {
    return axios.get(`/product/all?category=${category}&page=${page}&itemsPerPage=${itemsPerPage}&limit=${limit}`)
}

const fetchAllStoreByCity = (city, page, itemsPerPage, limit) => {
    return axios.get(`/store/all?city=${city}&page=${page}&itemsPerPage=${itemsPerPage}&limit=${limit}`)
}

const fetchDetailProductById = (id) => {
    return axios.get(`/product/${id}`)
}

const fetchDetailStoreById = (id) => {
    return axios.get(`/store/${id}`)
}

const fetchBestSeller = (limit) => {
    return axios.get(`/app/best-seller?limit=${limit}`,)
}

const fetchStatisticsApp = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/app/statistic`,
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



export {
    fetchDataAllcodes, fetchAllProductByCategory, fetchAllAdmin, fetchAllStoreByCity, fetchDetailProductById, fetchDetailStoreById,
    fetchAllAdminNotApproved, fetchBestSeller, fetchStatisticsApp
}