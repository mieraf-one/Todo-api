import useUser from "../hooks/useUser";

function RegisterForm() {
    const { firstName, setFirstName, lastName, setLastName,
            email, setEmail, username, setUsername, password,
            setPassword, loading, onSubmit, success, error } =  useUser();

    return (
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="first name"
                name="first-name"
                value={firstName}
                onChange={(e) => {setFirstName(e.target.value)}}
                required
            />
            <input
                type="text"
                placeholder="last name"
                name="last-name"
                value={lastName}
                onChange={(e) => {setLastName(e.target.value)}}
            />

            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                required
            />

            <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
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
            {success && <p style={{color: 'green'}}>{success}</p>}

            <button disabled={loading}>
                    {loading ? "Signing up..." : "Sign up"}
            </button>

        </form>
    );
}

export default RegisterForm;