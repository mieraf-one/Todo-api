import axios from "axios";
import BASE_URL from "./const";
import { useNavigate } from "react-router-dom";

export async function postRequest(path, data) {
    const navigate = useNavigate();

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

        if (err.response.status == 401) return navigate('/login');

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

        if (err.response.status == 401) return navigate('/login');

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

        if (err.response.status == 401) return navigate('/login');

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

        if (err.response.status == 401) return navigate('/login');

        throw new Error(Object.values(err.response.data).join(' '));
    }
}