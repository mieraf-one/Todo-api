import '../App.css'
import RegisterForm from '../components/RegisterForm'
import './LoginPage.css'
import { Link } from 'react-router-dom'


function RegisterPage() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back 👋</h2>
                <p className="login-subtitle">Please register to your account</p>
                <RegisterForm />
                
                <p>
                    Already have an account?{" "}
                    {/* <Link to="/login">Login</Link> */}
                </p>
            </div>
        </div>
    );
}

export default RegisterPage;