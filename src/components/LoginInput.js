import React from 'react';

const Login = ({ credentials, updateLoginForm }) => {
    const handleChange = (event) => {
        const { name, value } = event.target
        const updatedCredentials = {
            ...credentials,
            [name]: value
        }
        updateLoginForm(updatedCredentials)
    };

    return (
        <form>
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="username"
            />
            <input
                type="text"
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