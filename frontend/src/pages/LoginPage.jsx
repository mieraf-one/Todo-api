import '../pages/LoginPage.css'
import '../App.css'
import LoginForm from '../components/LoginForm'


function LoginPage() {
    return (
        <div className='login-container'>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    )
}

export default LoginPage;