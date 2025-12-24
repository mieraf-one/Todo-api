import axios from "axios";
import BASE_URL from "./const";

export async function postRequest(path, data) {
    try {
        const access = localStorage.getItem('access');
        
        const res = await axios.post(
            `${BASE_URL}${path}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                }
            });

        return res.data;

    } catch (err) {
        if (!err.response) {
            throw new Error('failed adding todos.');
        }

        throw new Error(Object.values(err.response.data).join(' '));
    }
}

export async function getRequest(path) {
    try {
        const access = localStorage.getItem('access');
        
        const res = await axios.get(
            `${BASE_URL}${path}`,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                }
            });

        return res.data;

    } catch (err) {
        if (!err.response) {
            throw new Error('failed getting todos.');
        }

        throw new Error(Object.values(err.response.data).join(' '));
    }
}

export async function patchRequest(path, data) {
    try {
        const access = localStorage.getItem('access');
        
        const res = await axios.patch(
            `${BASE_URL}${path}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                }
            });

        return res.data;

    } catch (err) {
        if (!err.response) {
            throw new Error('failed updating todos.');
        }

        throw new Error(Object.values(err.response.data).join(' '));
    }
}

export async function deleteRequest(path) {
    try {
        const access = localStorage.getItem('access');
        
        const res = await axios.delete(
            `${BASE_URL}${path}`,
            {
                headers: {
                    Authorization: `Bearer ${access}`,
                }
            });

        return res.data;

    } catch (err) {
        if (!err.response) {
            throw new Error('failed deleting todos.');
        }

        throw new Error(Object.values(err.response.data).join(' '));
    }
}