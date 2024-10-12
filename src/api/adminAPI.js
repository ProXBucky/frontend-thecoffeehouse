import axios from "../../axios";

const API_URL = import.meta.env.VITE_BACKEND_PORT;

const getAdminById = async (adminId, token) => {
    try {
        const response = await axios.get(`${API_URL}/admin/${adminId}`,
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

const deleteAdmin = async (adminId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/admin/${adminId}`,
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


const updateAdminData = async (body, token) => {
    try {
        const response = await axios.put(`${API_URL}/admin`,
            body,
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


const createNewProduct = async (data, token) => {
    try {
        const response = await axios.post(`${API_URL}/product`,
            data,
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

const deleteProduct = async (productId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/product/${productId}`,
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

const updateProductData = async (body, token) => {
    try {
        const response = await axios.put(`${API_URL}/product`,
            body,
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

const createNewStore = async (body, token) => {
    try {
        const response = await axios.post(`${API_URL}/store`,
            body,
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

const deleteStore = async (storeId, token) => {
    try {
        const response = await axios.delete(`${API_URL}/store/${storeId}`,
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

const updateStoreData = async (body, token) => {
    try {
        const response = await axios.put(`${API_URL}/store`,
            body,
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

const approveAdminById = async (adminId, token) => {
    try {
        const response = await axios.put(`${API_URL}/admin/approved/${adminId}`,
            {},
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

const createNewManager = async (body, token) => {
    try {
        const response = await axios.post(`${API_URL}/admin`,
            body,
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


const authorSystem = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/admin/author`,
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
    deleteAdmin, updateAdminData, getAdminById, createNewProduct, updateProductData, createNewStore, updateStoreData, approveAdminById, createNewManager,
    deleteProduct, deleteStore, authorSystem
}
