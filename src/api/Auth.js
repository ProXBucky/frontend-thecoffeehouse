import axios from "../../axios";

const registerUser = (body) => {
    return axios.post('/api/create-new-admin', body)
}

const loginUser = (body) => {
    return axios.post('/api/login-admin', body)
}

export { registerUser, loginUser }
