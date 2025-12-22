import axios from "axios";
import BASE_URL from "./const";

function postReq(path, data) {
    return axios.post(`${BASE_URL}${path}`, data)
}

export default postReq;