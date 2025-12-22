import { useState } from "react";
import postReq from "../utils/postReq";

function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const onSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        postReq(
        '/api/token/',
        {
            username,
            password
        }
        ).then((res) => {
            localStorage.setItem('access', res.data.access);
            localStorage.setItem('refresh', res.data.refresh);
        })
        .catch((error) => {
            setError(Object.values(error.response.data).join(''));
        })
        .finally(() => {
            setLoading(false);
        })
    }
    
    return {
        username, setUsername, password, setPassword, error, loading, onSubmit
    }
}


export default useLogin;