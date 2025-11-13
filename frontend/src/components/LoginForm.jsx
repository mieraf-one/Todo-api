import React, { useState } from "react";
import postRequest from '../api/ApiComponents';
import { Link } from "react-router-dom";

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const username = formData.username
        const password = formData.password

        const res = await postRequest({
                endPoint: "token",
                body: {username, password},
                headers: {'Content-Type': 'application/json'}
            })

        if (res.status == 200) {
            console.log(res.data);
            localStorage.setItem('access', res.data['access'])
            localStorage.setItem('refresh', res.data['refresh'])
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={formData.username}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;