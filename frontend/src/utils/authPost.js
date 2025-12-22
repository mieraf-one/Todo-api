import axios from "axios";
import BASE_URL from "./const";

function authPost(user) {
    return axios.post(`${BASE_URL}/api/signup/`, user)
}

export default authPost;