import React from "react";

function LoginForm() {
    return (
        <form 
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                padding: '30px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                width: '250px'
            }}
        >
            {/* username input */}
            <input
                placeholder="Username"
                name="username"/>
            
            {/* password input */}
            <input
                placeholder="password"
                name="password"/>
            
            {/* login button */}
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;