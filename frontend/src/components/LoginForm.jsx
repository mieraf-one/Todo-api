import useLogin from "../hooks/useLogin";

function LoginForm() {
    const { username, setUsername, password, setPassword, loading, error, onSubmit } = useLogin();

    return (
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
           
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                required
            />

            <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                required
            />
            
            {error && <p style={{color: 'red'}}>{error}</p>}

            <button disabled={loading}>
                   {loading ? "Logging in" : "Log in"}
            </button>

        </form>
    )
}

export default LoginForm;