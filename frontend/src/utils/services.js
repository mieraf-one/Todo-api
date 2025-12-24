import axios from 'axios';
import BASE_URL from './const';

export async function getAccessToken(username, password) {
    try {
        const res = await axios.post(
            `${BASE_URL}/api/token/`,
            {
                username,
                password
            }
        )

        return res.data
    } catch (error) {
        if (!error.response) {
                throw new Error("Something went wrong.");
        }
        
        throw new Error(Object.values(error.response.data).join(' '));
    }
}