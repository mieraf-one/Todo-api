import '../pages/LoginPage.css'
import '../App.css'
import LoginForm from '../components/LoginForm'


function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back 👋</h2>
                <p className="login-subtitle">Please log in to your account</p>
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginPage;