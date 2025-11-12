import '../pages/LoginPage.css'
import '../App.css'
import RegisterForm from '../components/RegisterForm'


function RegisterPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome</h2>
                <p className="login-subtitle">Please sign up to your account</p>
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterPage;