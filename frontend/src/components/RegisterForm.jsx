import React from "react";

function RegisterForm() {
    return (
        <form className="login-form">
            <input
                type="text"
                placeholder="first name"
                name="first-name"
                required
            />
            <input
                type="text"
                placeholder="last name"
                name="last-name"
                required
            />
            <input
                type="text"
                placeholder="Username"
                name="username"
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                required
            />
            <button type="submit">Sign up</button>
        </form>
    );
}

export default RegisterForm;