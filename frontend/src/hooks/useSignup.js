import { useState } from "react";
import postReq from "../utils/postReq";

function useUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        
        setLoading(true);
        setError(null);
        setSuccess(null);

        postReq(
            '/api/signup/',
            {
                firstName,
                lastName,
                username,
                email,
                password
            })
            .then((res) => {
                setSuccess("Successfully Registered.")
            })
            .catch((error) => {
                setError(Object.values(error.response.data).join(''))
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        success,
        loading,
        error,
        onSubmit
    }
}

export default useUser;