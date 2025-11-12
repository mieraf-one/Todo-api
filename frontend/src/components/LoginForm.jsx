import React, { useState } from "react";

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

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('form :' + formData.username)
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