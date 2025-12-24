import { useAuth } from "../hooks/useAuth";
import useLogin from "../hooks/useLogin";
import { getAccessToken } from "../utils/services";
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const { login } = useAuth();
    const { username, setUsername, password, setPassword, loading, setLoading, error, setError, reset } = useLogin();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        reset(); // reset loading and error.

        try {
            const tokens = await getAccessToken(username, password);

            login(tokens.access, tokens.refresh);
            navigate('/dashboard', { replace: true });

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
           
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

            <button disabled={loading} type="submit">
                   {loading ? "Logging in" : "Log in"}
            </button>

        </form>
    )
}

export default LoginForm;