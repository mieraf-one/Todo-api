import '../pages/LoginPage.css'
import '../App.css'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'


function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back 👋</h2>
                <p className="login-subtitle">Please log in to your account</p>
                <LoginForm />

                <p>
                    Haven't an account?{" "}
                    <Link to="/register">Register</Link>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;