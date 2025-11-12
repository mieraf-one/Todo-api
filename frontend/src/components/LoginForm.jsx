import React from "react";

function LoginForm() {
    return (
        <form className="login-form">
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
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;