import axios from "../../axios";

const getAllAdmin = (body) => {
    return axios.get('/api/get-all-admin', body)
}

const deleteAdmin = (id) => {
    return axios.delete(`/api/delete-admin?id=${id}`)
}

const updateAdminData = (body) => {
    return axios.put('/api/update-admin-data', body)
}

export { getAllAdmin, deleteAdmin, updateAdminData }