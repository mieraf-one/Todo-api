import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back 👋</h2>
                <p className="login-subtitle">Please register to your account</p>
                <LoginForm />
                
                <p>
                    Don't have an account? {" "}
                    <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage;