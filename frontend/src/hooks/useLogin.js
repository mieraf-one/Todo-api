import { useState } from "react";

function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    

    const reset = () => {
        setLoading(true);
        setError(null);
    }

    return {
        username,
        setUsername,
        password,
        setPassword,
        error,
        setError,
        loading,
        setLoading,
        reset
    }
}


export default useLogin;