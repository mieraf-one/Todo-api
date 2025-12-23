import { useState } from "react";
import authService from "../utils/authService";

function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const onSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        try {
            const res = await authService.login({ username, password });
            // redirect

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    
    return {
        username, setUsername, password, setPassword, error, loading, onSubmit
    }
}


export default useLogin;