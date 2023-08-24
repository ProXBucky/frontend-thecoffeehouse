import axios from "../../axios";

const registerUser = (body) => {
    return axios.post('/api/create-new-admin', body)
}

const loginUser = (body) => {
    return axios.post('/api/login', body)
}

const logoutUser = () => {
    return axios.get('/api/logout')
}

export { registerUser, loginUser, logoutUser }
