import axios from "../../axios";

const registerUser = (body) => {
    return axios.post('/api/create-new-admin', body)
}

const loginUser = (body) => {
    return axios.post('/api/login', body)
}

// author System ở file System (authorSystem)


export { registerUser, loginUser }
