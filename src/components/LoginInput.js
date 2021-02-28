import React from 'react';

const Login = ({ credentials, updateLoginForm, login, history }) => {
    const handleChange = (event) => {
        const { name, value } = event.target
        const updatedCredentials = {
            ...credentials,
            [name]: value
        }
        updateLoginForm(updatedCredentials)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(credentials, history);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="username"
            />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="password"
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;