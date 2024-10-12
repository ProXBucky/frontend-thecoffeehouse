import axios from "../../axios";

const registerUser = (body) => {
    return axios.post('/auth/register', body)
}

const loginUser = (body) => {
    return axios.post('/auth/login', body)
}


export { registerUser, loginUser }
