import axios from "axios";
import BASE_URL from "./const";

function postRequest(path, data) {
    return axios.post(
        `${BASE_URL}${path}`,
        data
    )
}

function getRequest(path) {
    return axios.get(
        `${BASE_URL}${path}`
    )
}