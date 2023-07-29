import axios from "../../axios";

const fetchDataAllcodes = (type) => {
    return axios.get(`/api/get-allcode-by-type?type=${type}`)
}



export { fetchDataAllcodes }